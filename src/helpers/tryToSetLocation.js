import editUser from './editUser';
import getUserLocation from './getUserLocation';
import db from './dexie';

// If location values are empty, it tries to set location (useful when the user has activated geolocation after disabling it).
const tryToSetLocation = async (user) => {
  const [userState, dispatch] = user;
  const {
    profile: { preferences },
  } = userState;

  const location = await getUserLocation();
  const newPreferences = {
    ...preferences,
    location,
  };
  const newUser = editUser(userState, [['preferences', newPreferences]]);
  await db.profile.update(3, { preferences: newPreferences });
  dispatch({ type: 'EDIT_USER', payload: newUser });

};

export default tryToSetLocation;
