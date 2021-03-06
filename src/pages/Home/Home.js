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
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import useFetchPlace from '../../hooks/useFetchPlace';

function Home() {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const { fetchPlace } = useFetchPlace();
  const handleClick = () => setSelectedPlace(randomPlace);

  useEffect(() => {
    console.log('hello');
    let didMount = true;
    async function fetchData() {
      if (!randomPlace && userState) {
        await fetchPlace();
      }
    }
    if (didMount) fetchData();
    return () => (didMount = false);
  }, [randomPlace, fetchPlace, userState]);

  return (
    <>
      <AppHead>
        <Logo />
      </AppHead>
      <div className="home">
        <AsideShuffle userState={userState} />
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
