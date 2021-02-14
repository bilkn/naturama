import db from './dexie';
import createFileURL from './createFileURL';
import arrayBufferToBlob from './arrayBufferToBlob';
import getUserLocation from './getUserLocation';
async function initialize(dispatch) {
  const result = await db.profile.get(3);
  if (!result) {
    await initializeDB();
  }
  await initUser(dispatch);
}

async function initUser(dispatch) {
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
  };
  dispatch({ type: 'INIT', payload: dbData });
}

async function initializeDB() {
  const location = await getUserLocation();
  await db.profile.bulkAdd([
    { username: '' },
    {
      picture: null,
    },
    {
      preferences: {
        radius: 200,
        location: {
          lat: location.lat,
          lon: location.lon,
        },
      },
    },
  ]);
}
export default initialize;
