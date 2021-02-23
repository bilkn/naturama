import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import ErrorContext from '../../context/ErrorContext';
import Loader from '../../components/Loader/Loader';
import db from '../../helpers/dexie';
import AppHead from '../../components/AppHead/AppHead';
import Logo from '../../components/Logo/Logo';
import Error from '../../components/Error/Error';
import UserRequestContext from '../../context/UserRequestContext';

function Home() {
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error, setError] = useContext(ErrorContext);
  const handleClick = () => setSelectedPlace(randomPlace);

  const userLocation = userState && userState.profile.preferences.location || null;



  useEffect(async () => {
    if (!randomPlace && userState && userLocation) {
      try {
        const place = await getRandomPlace(userState);
        const userPlace = await createPlaceForUserData(place);
        if (!error.isPlaceFound) setError({ ...error, isPlaceFound: true });
        const newHistory = [...userState.history, userPlace.xid];
        setRandomPlace(userPlace);
        dispatch({ type: 'ADD_HISTORY', payload: newHistory });
        db.history.put({ xid: userPlace.xid });
      } catch {
        setError({ ...error, isPlaceFound: false });
        // !!! addModal or Error component.
      }
    }
  }, [userState]);
  
  return (
    <>
      <AppHead>
        <Logo />
      </AppHead>
      <div className="home">
        {(userLocation && !(userLocation.lat || userLocation.lon) && (
          <Error text="You must activate your geolocation." />
        )) ||
          (randomPlace ? (
            <Place place={randomPlace} handleClick={handleClick} />
          ) : error.isPlaceFound ? (
            <Loader />
          ) : (
            <Error text="No place was found." />
          ))}
      </div>
    </>
  );
}

export default Home;
