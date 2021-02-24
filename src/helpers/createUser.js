import getUserLocation from './getUserLocation';

async function createUser() {
  const location = await getUserLocation();
  console.log("location", location)
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
  };
  return userTemplate;
}

export default createUser;
