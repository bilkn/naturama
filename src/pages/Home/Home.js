import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import ErrorContext from '../../context/ErrorContext';
import Loader from '../../components/Loader/Loader';
import AppHead from '../../components/AppHead/AppHead';
import Logo from '../../components/Logo/Logo';
import Error from '../../components/Error/Error';
import UserRequestContext from '../../context/UserRequestContext';
import triggerRandomPlaceRequest from '../../helpers/triggerRandomPlaceRequest';

function Home() {
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error, setError] = useContext(ErrorContext);

  const handleClick = () => setSelectedPlace(randomPlace);

  const userLocation =
    (userState && userState.profile.preferences.location) || null;

  useEffect(() => {
    async function fetchData() {
      if (!randomPlace && userState && userLocation) {
        const errorState = [error, setError];
        const requestState = [canUserRequest, setCanUserRequest];
        const user = [userState, dispatch];
        const args = {
          user,
          requestState,
          errorState,
          setRandomPlace,
        };
        try {
          await triggerRandomPlaceRequest(args);
        } catch (err) {
          console.log(err);
          setError({ ...error, isPlaceFound: false });
        }
      }
    }
    fetchData();
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
