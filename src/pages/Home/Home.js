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
    (userState && userState.profile.preferences.location.lat) || null;

  useEffect(() => {
    async function fetchData() {
      if (!randomPlace && userState && userLocation && canUserRequest) {
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
  }, [
    userState,
    canUserRequest,
    setCanUserRequest,
    dispatch,
    error,
    setError,
    randomPlace,
    setRandomPlace,
    userLocation,
  ]);

  return (
    <>
      <AppHead>
        <Logo />
      </AppHead>
      <div className="home">
        {(!userLocation && (
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
