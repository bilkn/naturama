import { useCallback, useContext, useEffect } from 'react';
import ErrorContext from '../context/ErrorContext';
import RandomPlaceContext from '../context/RandomPlaceContext';
import UserContext from '../context/UserContext';
import UserRequestContext from '../context/UserRequestContext';
import triggerRandomPlaceRequest from '../helpers/triggerRandomPlaceRequest';

function useFetchPlace({ autoFetch = false }) {
  const [userState, dispatch] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);

  const fetchPlace = useCallback(async () => {
    if (error.isGeoActive && userState) {
      if (canUserRequest) {
        const errorState = [error, setError];
        const requestState = [canUserRequest, setCanUserRequest];
        const user = [userState, dispatch];
        const args = { user, requestState, errorState, setRandomPlace };
        try {
          await triggerRandomPlaceRequest(args);
        } catch {
          if (error.isPlaceFound) setError({ ...error, isPlaceFound: false });
        }
      } else {
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
  ]);
  useEffect(() => {
    let didMount = true;
    async function fetchData() {
      if (!randomPlace && canUserRequest) {
        await fetchPlace();
      }
    }
    if (didMount && autoFetch) fetchData();
    return () => (didMount = false);
  }, [randomPlace, fetchPlace, autoFetch, canUserRequest]);
  return { fetchPlace };
}

export default useFetchPlace;
