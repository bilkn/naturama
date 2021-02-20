import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import MobileNav from '../../components/MobileNav/MobileNav';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import ErrorContext from '../../context/ErrorContext';
import Loader from '../../components/Loader/Loader';
import db from '../../helpers/dexie';
import AppHead from '../../components/AppHead/AppHead';
import Logo from '../../components/Logo/Logo';
function Home() {
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [, setTitle] = useContext(TitleContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const handleClick = () => setSelectedPlace(randomPlace);
  useEffect(() => {
    setTitle(null);
  }, []);

  useEffect(async () => {
    if (!randomPlace && userState && error.isGeoActive) {
      try {
        const place = await getRandomPlace(userState);
        const userPlace = await createPlaceForUserData(place);
        const newHistory = [...userState.history, userPlace.xid];
        setRandomPlace(userPlace);
        dispatch({ type: 'ADD_HISTORY', payload: newHistory });
        db.history.put({ xid: userPlace.xid });
      } catch (err) {
        console.log(err);
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
        {randomPlace ? (
          <Place place={randomPlace} handleClick={handleClick} />
        ) : (
          <Loader />
        )}
        <MobileNav />
      </div>
    </>
  );
}

export default Home;
