import React, { useContext, useLayoutEffect } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';
import Error from '../../components/Error/Error';
import ErrorContext from '../../context/ErrorContext';


function Home() {
  const [userState] = useContext(UserContext);
  const [error] = useContext(ErrorContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');



  return (
    <>
      <div className="home">
        {(!error.isGeoActive && (
          <Error text="Your location couldn't be set, try to set your location manually." />
        )) ||
          (!error.isPlaceFound && <Error text="No place was found." />) || (
            <Place isMatched={isMatched} />
          )}

        {isMatched && (
          <>
            <AsideShuffle userState={userState} />
            <AsidePictureToolbar />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
