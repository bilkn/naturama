import setUserLocation from './setUserLocation';
import db from './dexie';
async function initialize(dispatch) {
  const result = await db.profile.get(3);
  if (!result) {
    await initializeDB();
  }

  const preferencesData = await db.profile.get(3);
  const preferences = preferencesData.preferences;
  const location = preferences.location;
  if (!location.lat || !location.lon) {
    setUserLocation(db, dispatch);
  }
  initUser(dispatch);
}

async function initUser(dispatch) {
  const profileItems = await db.table('profile').toArray();
  const favouritesItems = await db.table('favourites').toArray();
  const dailyListItems = await db.table('dailyList').toArray();
  const historyItems = await db.table('history').toArray();
  const [username, picture, preferences] = profileItems;

  const dbData = {
    profile: {
      username: username.username,
      picture: picture.picture,
      preferences: preferences.preferences,
    },
    favourites: favouritesItems,
    dailyList: dailyListItems,
    history: historyItems,
  };
  dispatch({ type: 'INIT', payload: dbData });
}

async function initializeDB() {
  await db.profile.bulkAdd([
    { username: '' },
    { picture: null },
    {
      preferences: {
        radius: 200000,
        location: {
          lat: null,
          lon: null,
        },
      },
    },
  ]);
}
export default initialize;
