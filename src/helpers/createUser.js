import getUserLocation from './getUserLocation';

async function createUser() {
  const location = await getUserLocation();
  const userTemplate = {
    profile: {
      username: '',
      picture: {
        file: null,
        url: '',
      },
      preferences: {
        radius: 200,
        location: {
          ...location,
        },
      },
    },
    favourites: [],
    dailyList: [],
    history: [],
    isNotificationOpen: false,
    notification: '',
    notifTimeoutID: null,
  };
  return userTemplate;
}

export default createUser;
