import clearNotificationIfExist from './clearNotificationIfExist';
import createPlaceForUserData from './createPlaceForUserData';
import db from './dexie';
import { getRandomPlace } from './getRandomPlace';
import tryToSetLocation from './tryToSetLocation';

async function triggerRandomPlaceRequest(args) {
  const { user, requestState, errorState, setRandomPlace } = args;
  const [canUserRequest, setCanUserRequest] = requestState;
  const [userState, dispatch] = user;
  clearNotificationIfExist(userState, dispatch);
  if (canUserRequest) {
    const {
      location: { lat },
      location: { lon },
    } = userState.profile.preferences;

    preventRequestForAWhile(setRandomPlace, setCanUserRequest);
    (!lat || !lon) && (await tryToSetLocation(user, errorState));
    await requestRandomPlace({ user, errorState, setRandomPlace });
  } else {
    dispatch({ type: 'FAST_REQUEST' });
  }
}

const preventRequestForAWhile = (setRandomPlace, setCanUserRequest) => {
  setRandomPlace(null);
  setCanUserRequest(false);
  const timeout = setTimeout(() => {
    setCanUserRequest(true);
    clearTimeout(timeout);
  }, 4000);
};

const requestRandomPlace = async (args) => {
  const { user, errorState, setRandomPlace } = args;
  const [error, setError] = errorState;
  const [userState, dispatch] = user;
  const place = await getRandomPlace(userState);
  const userPlace = await createPlaceForUserData(place);
  const newHistory = [...userState.history, userPlace.xid];

  // If place is found, "isPlaceFound" state will be set to true.
  if (!error.isPlaceFound) setError({ ...error, isPlaceFound: true });
  setRandomPlace(userPlace);
  dispatch({ type: 'ADD_HISTORY', payload: newHistory });
  error.isDBActive && db.history.put({ xid: userPlace.xid });
};

export default triggerRandomPlaceRequest;
