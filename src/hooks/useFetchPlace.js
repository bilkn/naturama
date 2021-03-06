import { useContext } from 'react';
import ErrorContext from '../context/ErrorContext';
import RandomPlaceContext from '../context/RandomPlaceContext';
import UserContext from '../context/UserContext';
import UserRequestContext from '../context/UserRequestContext';
import triggerRandomPlaceRequest from '../helpers/triggerRandomPlaceRequest';

function useFetchPlace() {
  const [userState, dispatch] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [, setRandomPlace] = useContext(RandomPlaceContext);

  const fetchPlace = async () => {
    if (error.isGeoActive && canUserRequest) {
      const errorState = [error, setError];
      const requestState = [canUserRequest, setCanUserRequest];
      const user = [userState, dispatch];
      const args = { user, requestState, errorState, setRandomPlace };
      try {
        await triggerRandomPlaceRequest(args);
      } catch (err) {
        if (error.isPlaceFound) setError({ ...error, isPlaceFound: false });
      }
    } else {
      canUserRequest && dispatch({ type: 'FAST_REQUEST' });
    }
  };
  return { fetchPlace };
}

export default useFetchPlace;
