import Dexie from 'dexie';

const db = new Dexie('userDatabase');
db.version(1).stores({
  favourites: [],
  profile: {
    username: '',
    picture: null,
    preferences: {
      radius: 200000,
      location: {
        lat: null,
        lon: null,
      },
    },
  },
  dailyList: [],
  history: [],
});

export default db;
