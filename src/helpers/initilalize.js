import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getUserLocation from './getUserLocation';
import getDailyPlaceList from './getDailyPlaceList';
import initUserWithoutDB from './initUserWithoutDB';
import isHoursPassed from './isHoursPassed';

async function initialize(errorState, dispatch) {
  if (window.indexedDB) {
    const result = await db.profile.get(3);
    !result && (await initializeDB(errorState));
    await initUserWithDB(dispatch);
  } else {
    await initUserWithoutDB(dispatch);
  }
}

async function getDataFromDB() {
  const profile = await db.table('profile').toArray();
  const favourites = await db.table('favourites').toArray();
  let history = await db.table('history').toArray();
  history = history.map(({ xid }) => xid);
  return { profile, favourites, history };
}

async function initUserWithDB(dispatch) {
  const { profile, favourites, history } = await getDataFromDB();
  const [
    { username },
    { picture },
    { preferences },
    { lastListUpdateDate },
  ] = profile;

  const pictureBlob = picture && arrayBufferToBlob(picture);

  let dailyList = null;
  // It updates the daily place list everyday.
  if (isHoursPassed(24, lastListUpdateDate)) {
    dailyList = await getDailyPlaceList();
    await updateDailyListDB(dailyList);
  } else dailyList = await db.table('dailyList').toArray();
  const dbData = {
    profile: {
      username,
      picture: {
        file: pictureBlob || null,
        url: pictureBlob ? createFileURL(pictureBlob) : null,
      },
      preferences,
    },
    favourites,
    dailyList,
    history,
    isNotificationOpen: false,
    notification: '',
  };
  dispatch({ type: 'INIT', payload: dbData });
}

async function initializeDB() {
  const location = await getUserLocation();
  const dailyPlaceList =
    location.lat && location.lon ? await getDailyPlaceList() : [];

  
  await db.dailyList.bulkAdd([...dailyPlaceList]);
  await db.profile.bulkAdd([
    { username: '' },
    {
      picture: null,
    },
    {
      preferences: {
        radius: 200,
        location: {
          ...location,
        },
      },
    },
    {
      lastListUpdateDate: new Date(),
    },
  ]);
}

async function updateDailyListDB(dailyPlaceList) {
  await db.dailyList.clear();
  await db.profile.update(4, { lastListUpdateDate: new Date() });
  await db.dailyList.bulkPut([...dailyPlaceList]);
}
export default initialize;
