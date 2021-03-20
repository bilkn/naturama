import getUserLocation from './getUserLocation';

async function createUser() {
  const location = await getUserLocation();
  const user = {
    profile: {
      username: 'Anonymous',
      picture: {
        file: null,
        url: '',
      },
      preferences: {
        radius: 200,
        location,
      },
    },
    favourites: [],
    dailyList: [],
    history: [],
    shuffleHistory: [], 
    isNotificationOpen: false,
    notification: '',
  };
  return user;
}

export default createUser;
