import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getDailyPlaceList from './getDailyPlaceList';
import initUserWithoutDB from './initUserWithoutDB';
import isHoursPassed from './isHoursPassed';
import editUser from './editUser';
import createUser from './createUser';

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
    dailyList: [],
    history,
    shuffleHistory: [],
    isNotificationOpen: false,
    notification: '',
  };

  // It updates the daily place list everyday.
  if (isHoursPassed(24, lastListUpdateDate)) {
    dailyList = await getDailyPlaceList(dbData);
    await updateDailyListDB(dailyList);
  } else dailyList = await db.table('dailyList').toArray();
  const editedUser = editUser(dbData, [['dailyList', dailyList]]);
  dispatch({ type: 'INIT', payload: editedUser });
}

async function initializeDB() {
  const newUser = await createUser();
  console.log(newUser)
  const {location} = newUser.profile.preferences;
  const dailyPlaceList =
    location.lat && location.lon ? await getDailyPlaceList(newUser) : [];

  if (dailyPlaceList.length !== 0) {
    await db.dailyList.bulkAdd([...dailyPlaceList]);
  }
  await db.profile.bulkAdd([
    { username: 'Anonymous' },
    {
      picture: null,
    },
    {
      preferences: {
        radius: 200,
        location,
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
