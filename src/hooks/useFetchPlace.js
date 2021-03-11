import { useCallback, useContext, useEffect, useState } from 'react';
import ErrorContext from '../context/ErrorContext';
import RandomPlaceContext from '../context/RandomPlaceContext';
import UserContext from '../context/UserContext';
import UserRequestContext from '../context/UserRequestContext';
import clearNotificationIfExist from '../helpers/clearNotificationIfExist';
import triggerRandomPlaceRequest from '../helpers/triggerRandomPlaceRequest';

function useFetchPlace({ autoFetch = false }) {
  const [userState, dispatch] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [isLoading, setIsLoading] = useState(false);

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
          setIsLoading(true);
          await triggerRandomPlaceRequest(args);
          setIsLoading(false);
        } catch(err) {
          console.log(err)
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
      console.log('autofetch');
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
