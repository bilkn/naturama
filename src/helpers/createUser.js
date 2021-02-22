import getUserLocation from './getUserLocation';

async function createUser() {
  let location = null;
  try {
    location = await getUserLocation();
  } catch (err) {
    console.log("location couldn't set.");
    // !!! Add notification.
  }
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
