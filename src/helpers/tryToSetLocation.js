import editUser from './editUser';
import getUserLocation from './getUserLocation';
import db from './dexie';

// If location values are empty, it tries to set location (useful when the user has activated geolocation after disabling it).
const tryToSetLocation = async (user, errorState) => {
  const [error, setError] = errorState;
  const [userState, dispatch] = user;
  const {
    profile: { preferences },
  } = userState;

  const location = await getUserLocation();
  if (!location.lat || !location.lon)
    setError({ ...error, isGeoActive: false });
  else if (!error.isGeoActive) setError({ ...error, isGeoActive: true });
  const newPreferences = {
    ...preferences,
    location,
  };
  const newUser = editUser(userState, [['preferences', newPreferences]]);
  error.isDBActive &&
    (await db.profile.update(3, { preferences: newPreferences }));
  dispatch({ type: 'EDIT_USER', payload: newUser });
};

export default tryToSetLocation;
