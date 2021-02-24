import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getUserLocation from './getUserLocation';
import getDailyPlaceList from './getDailyPlaceList';
import initUserWithoutDB from './initUserWithoutDB';

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

async function initializeDB() {
  const location = await getUserLocation();
  let dailyPlaceList = [];
  if (location.lat && location.lon) {
    dailyPlaceList = await getDailyPlaceList();
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
