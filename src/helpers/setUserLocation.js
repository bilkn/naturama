async function setUserLocation(db, dispatch) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = Math.round(position.coords.latitude);
      const lon = Math.round(position.coords.longitude);
      const location = {
        lat: lat,
        lon: lon,
      };
      const props = await db.table('profile').toArray();
      const prefProps = props[2].preferences;
      const newPreferences = {
        ...prefProps,
        location: location,
      };
      try {
        await db.profile.update(3, { preferences: newPreferences });
        dispatch({
          type: 'CHANGE_PROFILE',
          payload: createNewProfile(props, 'preferences', newPreferences),
        });
      } catch (err) {
        console.log(err);
        // !!! ADD MODAL
      }
    });
  } else {
    console.log('No geolocation');
    // !!! ADD MODAL
  }
}

function createNewProfile(props, target, value) {
  const username = props[0].username;
  const picture = props[1].picture;
  const preferences = props[2].preferences;
  const newProfile = {
    ...username,
    ...picture,
    ...preferences,
    [target]: value,
  };
  return newProfile;
}

export default setUserLocation;
