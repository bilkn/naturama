function setUserLocation(db) {
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
      try {
        await db.profile.update(3, {
          preferences: {
            ...prefProps,
            location: location,
          },
        });
        console.log('UPDATE DB');
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

export default setUserLocation;
