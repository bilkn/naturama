import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import ErrorContext from '../../context/ErrorContext';
import Loader from '../../components/Loader/Loader';
import AppHead from '../../components/AppHead/AppHead';
import Logo from '../../components/Logo/Logo';
import Error from '../../components/Error/Error';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import useFetchPlace from '../../hooks/useFetchPlace';

function Home() {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const { fetchPlace } = useFetchPlace();
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    let didMount = true;
    async function fetchData() {
      if (!randomPlace && userState) {
        await fetchPlace();
      }
    }
    if (didMount) fetchData();
    return () => (didMount = false);
  }, [randomPlace, fetchPlace, userState]);

  useEffect(() => {
    let enableCall = true;
    const handleResize = () => {
      if (!enableCall) return;
      enableCall = false;
      const mql = window.matchMedia('(min-width:1024px)');
      if (mql.matches) setShowAside(true);
      else setShowAside(false);
      setTimeout(() => (enableCall = true), 250);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => setSelectedPlace(randomPlace);
  return (
    <>
      <AppHead>
        <Logo />
      </AppHead>
      <div className="home">
        {showAside && <AsideShuffle userState={userState} />}
        {(!error.isGeoActive && (
          <Error text="Your location couldn't be set, try to set your location manually." />
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
