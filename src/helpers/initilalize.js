import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getUserLocation from './getUserLocation';
import getDailyPlaceList from './getDailyPlaceList';
async function initialize(dispatch) {
  const result = await db.profile.get(3);
  if (!result) {
    await initializeDB();
  }
  await initUserWithDB(dispatch);
  // !!! Add initUserWithUserState function.
}

async function initUserWithDB(dispatch) {
  const profileItems = await db.table('profile').toArray();
  const favouritesItems = await db.table('favourites').toArray();
  const dailyListItems = await db.table('dailyList').toArray();
  const historyItems = await db.table('history').toArray();
  const [username, picture, preferences] = profileItems;
  let pictureBlob = null;
  if (picture.picture) {
    pictureBlob = arrayBufferToBlob(picture.picture);
  }
  const dbData = {
    profile: {
      username: username.username,
      picture: {
        file: pictureBlob || null,
        url: pictureBlob ? createFileURL(pictureBlob) : null,
      },
      preferences: preferences.preferences,
    },
    favourites: favouritesItems,
    dailyList: dailyListItems,
    history: historyItems,
    notification: '',
  };
  dispatch({ type: 'INIT', payload: dbData });
}

function initUserWithUserState(dispatch) {}

async function initializeDB() {
    const location = await getUserLocation();
    let dailyPlaceList = [];
    if (location) {
      dailyPlaceList = await getDailyPlaceList();
      // !!! setError geo true.
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
