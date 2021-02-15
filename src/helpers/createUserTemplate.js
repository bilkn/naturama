import getUserLocation from './getUserLocation';

async function createUserTemplate() {
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
  };
  return userTemplate;
}

export default createUserTemplate;
