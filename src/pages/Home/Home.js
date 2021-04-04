import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import AsideShuffle from '../../components/AsideShuffle/AsideShuffle';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';
import Error from '../../components/Error/Error';
import ErrorContext from '../../context/ErrorContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import LoadingContext from '../../context/LoadingContext';
import Footer from '../../components/Footer/Footer';

function Home() {
  const [userState] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [isLoading] = useContext(LoadingContext);

  useEffect(() => {
    if (userState) {
      const { preferences } = userState.profile;
      const { lat, lon } = preferences.location;
      if (lat && lon && !error.isGeoActive) {
        setError({ ...error, isGeoActive: true });
      } else if ((!lat || !lon) && error.isGeoActive) {
        setError({ ...error, isGeoActive: false });
      }
    }
  }, [error, setError, userState]);

  return (
    <>
      <div className="home">
        {(!error.isGeoActive && (
          <Error text="Your location could not be set automatically, you can try to set your location manually on the preferences section." />
        )) ||
          (!error.isPlaceFound && !selectedPlace && !isLoading && (
            <Error text="No place was found." />
          )) || <Place isMatched={isMatched} />}

        {isMatched && (
          <>
            <AsideShuffle userState={userState} />
            <AsidePictureToolbar />
          </>
        )}
        <Footer>
          <Footer.Text>&copy;2021 Code and design by Bilkan Konus</Footer.Text>
          <Footer.Wrapper>
            <Footer.Link href="https://github.com/bilkn/naturama" style={{marginRight: "0.7em"}}>
              <Footer.Icon classNames="fab fa-github" />
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/bilkankonus/">
              <Footer.Icon classNames="fa fa-linkedin-square" />
            </Footer.Link>
          </Footer.Wrapper>
        </Footer>
      </div>
    </>
  );
}

export default Home;
