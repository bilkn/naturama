import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getUserLocation from './getUserLocation';
import getDailyPlaceList from './getDailyPlaceList';
import createUser from './createUser';
async function initialize(errorState, dispatch) {
  if (window.indexedDB) {
    const result = await db.profile.get(3);
    !result && (await initializeDB(errorState));
    initUserWithDB(dispatch);
  } else {
    await initUserWithoutDB(dispatch);
  }
}

async function initUserWithDB(dispatch) {
  const profileItems = await db.table('profile').toArray();
  const favouritesItems = await db.table('favourites').toArray();
  const dailyListItems = await db.table('dailyList').toArray();
  let historyItems = await db.table('history').toArray();
  historyItems = historyItems.map(({ xid }) => xid);
  const [{ username }, { picture }, { preferences }] = profileItems;
  let pictureBlob = picture && arrayBufferToBlob(picture);
  
  const dbData = {
    profile: {
      username,
      picture: {
        file: pictureBlob || null,
        url: pictureBlob ? createFileURL(pictureBlob) : null,
      },
      preferences,
    },
    favourites: favouritesItems,
    dailyList: dailyListItems,
    history: historyItems,
    isNotificationOpen: false,
    notification: '',
  };
  dispatch({ type: 'INIT', payload: dbData });
}

async function initUserWithoutDB(dispatch) {
  const freshUser = await createUser();
  dispatch({ type: 'INIT', payload: freshUser });
}

async function initializeDB(errorState) {
  const [error, setError] = errorState;
  const location = await getUserLocation();
  let dailyPlaceList = [];
  if (location) {
    dailyPlaceList = await getDailyPlaceList();
  } else {
    const newError = { ...error, isGeoActive: false };
    setError(() => newError);
  }
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
  ]);
}
export default initialize;
