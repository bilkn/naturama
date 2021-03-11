import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import ErrorContext from '../../context/ErrorContext';
import Loader from '../../components/Loader/Loader';

import Error from '../../components/Error/Error';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import useFetchPlace from '../../hooks/useFetchPlace';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';

function Home() {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const displayedPlace = randomPlace || selectedPlace;

  const { isLoading } = useFetchPlace({ autoFetch: true });

  const handleClick = () => {
    !isMatched && setSelectedPlace(displayedPlace);
  };
  return (
    <>
      <div className="home">
        {isMatched && (
          <>
            <AsideShuffle userState={userState} />
            {displayedPlace && <AsidePictureToolbar />}
          </>
        )}
        {(!error.isGeoActive && (
          <Error text="Your location couldn't be set, try to set your location manually." />
        )) ||
          (isLoading ? (
            <Loader />
          ) : error.isPlaceFound && displayedPlace ? (
            <Place place={displayedPlace} handleClick={handleClick} />
          ) : (
            <Error text="No place was found." />
          ))}
      </div>
    </>
  );
}

export default Home;
