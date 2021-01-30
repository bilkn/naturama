function setUserLocation(setUser) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = Math.round(position.coords.latitude);
      const lon = Math.round(position.coords.longitude);
      const location = {
        lat: lat,
        lon: lon,
      };
      setUser((oldUser) => {
        return {
          ...oldUser,
          location: location,
        };
      });
    });
  } else {
    console.log('No geolocation');
    // !!! ADD MODAL
  }
}

export default setUserLocation;
