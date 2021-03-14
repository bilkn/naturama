import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';
import Error from '../../components/Error/Error';
import ErrorContext from '../../context/ErrorContext';

function Home() {
  const [userState] = useContext(UserContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const [error] = useContext(ErrorContext);

  
  return (
    <>
      <div className="home">
        {!error.isGeoActive && (
          <Error text="Your location couldn't be set, try to set your location manually." />
        )}
        {!error.isPlaceFound && <Error text="No place was found." />}
        {isMatched && (
          <>
            <AsideShuffle userState={userState} />
            <AsidePictureToolbar />
          </>
        )}
        <Place isMatched={isMatched} />
      </div>
    </>
  );
}

export default Home;
