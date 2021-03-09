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
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';

function Home() {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  useFetchPlace({ autoFetch: true });


  const handleClick = () => setSelectedPlace(randomPlace);
  return (
    <>
      <AppHead>
        <Logo />
      </AppHead>
      <div className="home">
        {isMatched && (
          <>
            <AsideShuffle userState={userState} />
            <AsidePictureToolbar />
          </>
        )}
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
