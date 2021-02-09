import setUserLocation from './setUserLocation';
import db from './dexie';
async function initialize(setUser) {
  const result = await db.profile.get(3);
  if (!result) {
    await initializeDB();
  }

  const preferencesData = await db.profile.get(3);
  const preferences = preferencesData.preferences;
  console.log(preferences);
  const location = preferences.location;
  if (!location.lat || !location.lon) {
    console.log('initialize location');
    setUserLocation(db);
  }
  initUser(setUser);
}

async function initUser(setUser) {
  const dbData = {
    profile: await db.profile,
    favourites: await db.favourites,
    dailyList: await db.dailyList,
    history: await db.history,
  };
  setUser(dbData);
}

async function initializeDB() {
  await db.profile.bulkAdd([
    { username: '' },
    { picture: null },
    {
      preferences: {
        radius: 20000,
        location: {
          lat: null,
          lon: null,
        },
      },
    },
  ]);
}
export default initialize;
