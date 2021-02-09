import Dexie from 'dexie';

const db = new Dexie('userDatabase');
db.version(1).stores({
  profile: '++id',
  favourites: '++id, *xid',
  dailyList: '++id, *xid',
  history: '++id, *xid',
});

export default db;
