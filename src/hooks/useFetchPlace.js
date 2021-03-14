import { useCallback, useContext, useEffect } from 'react';
import ErrorContext from '../context/ErrorContext';
import LoadingContext from '../context/LoadingContext';
import RandomPlaceContext from '../context/RandomPlaceContext';
import SelectedPlaceContext from '../context/SelectedPlaceContext';
import UserContext from '../context/UserContext';
import UserRequestContext from '../context/UserRequestContext';
import clearNotificationIfExist from '../helpers/clearNotificationIfExist';
import triggerRandomPlaceRequest from '../helpers/triggerRandomPlaceRequest';

function useFetchPlace({ autoFetch = false }) {
  const [userState, dispatch] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  const fetchPlace = useCallback(async () => {
    if (error.isGeoActive && userState && !isLoading) {
      if (canUserRequest) {
        const errorState = [error, setError];
        const requestState = [canUserRequest, setCanUserRequest];
        const user = [userState, dispatch];
        const args = {
          user,
          requestState,
          errorState,
          setRandomPlace,
          setIsLoading,
        };
        try {
          setRandomPlace(null);
          setSelectedPlace(null);
          setIsLoading(true);
          await triggerRandomPlaceRequest(args);
        } catch (err) {
          console.log(err);
          if (error.isPlaceFound) setError({ ...error, isPlaceFound: false });
          setIsLoading(false);
        }
      } else {
        clearNotificationIfExist(userState, dispatch);
        dispatch({ type: 'FAST_REQUEST' });
      }
    }
  }, [
    canUserRequest,
    setCanUserRequest,
    userState,
    dispatch,
    error,
    setError,
    setRandomPlace,
    isLoading,
    setIsLoading,
    setSelectedPlace
  ]);

  useEffect(() => {
    let didMount = true;
    async function fetchData() {
      await fetchPlace();
    }
    if (
      didMount &&
      autoFetch &&
      !randomPlace &&
      canUserRequest &&
      error.isPlaceFound &&
      !isLoading
    ) {
      fetchData();
    }
    return () => (didMount = false);
  }, [
    randomPlace,
    fetchPlace,
    autoFetch,
    canUserRequest,
    error.isPlaceFound,
    isLoading,
  ]);
  return { isLoading, fetchPlace };
}

export default useFetchPlace;
