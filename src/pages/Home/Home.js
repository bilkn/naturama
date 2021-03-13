import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';

function Home() {
  const [userState] = useContext(UserContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');

  return (
    <>
      <div className="home">
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
