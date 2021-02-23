import createPlaceForUserData from './createPlaceForUserData';
import db from './dexie';
import { getRandomPlace } from './getRandomPlace';
import tryToSetLocation from './tryToSetLocation';

async function triggerRandomPlaceRequest(args) {
  const { user, requestState, errorState, setRandomPlace } = args;
  const [canUserRequest, setCanUserRequest] = requestState;
  const [userState] = user;
  const {
    location: { lat },
    location: { lon },
  } = userState.profile.preferences;
  if (!lat || !lon) {
    await tryToSetLocation(user);
  } else if (canUserRequest) {
    preventRequestForAWhile(setRandomPlace, setCanUserRequest);
    await requestRandomPlace({ user, errorState, setRandomPlace });
  } else {
    console.log('You can fetch after 2 sec.');
    // !!! Add notif.
  }
}

const preventRequestForAWhile = (setRandomPlace, setCanUserRequest) => {
  setRandomPlace(() => null);
  setCanUserRequest(() => false);
  const timeout = setTimeout(() => {
    setCanUserRequest(() => true);
    clearTimeout(timeout);
  }, 2000);
};

const requestRandomPlace = async (args) => {
  const { user, errorState, setRandomPlace } = args;
  const [error, setError] = errorState;
  const [userState, dispatch] = user;
  const place = await getRandomPlace(userState); // !!! Add stop system for fetching after unmount.
  const userPlace = await createPlaceForUserData(place);
  const newHistory = [...userState.history, userPlace.xid];

  // If place is found, isPlaceFound will set to true.
  if (!error.isPlaceFound) setError({ ...error, isPlaceFound: true });
  setRandomPlace(userPlace);
  dispatch({ type: 'ADD_HISTORY', payload: newHistory });
  db.history.put({ xid: userPlace.xid });
};

export default triggerRandomPlaceRequest;
