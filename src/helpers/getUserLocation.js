function getUserLocation() {
  return new Promise((resolve) => {
    const options = {
      timeout: 6000,
    };
    const error = () => {
      resolve({ lat: '', lon: '' });
    };
    const success = (position) => {
      const lat = Math.round(position.coords.latitude);
      const lon = Math.round(position.coords.longitude);
      const location = {
        lat,
        lon,
      };
      resolve(location);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      // !!! ADD NOTIF OR REJECT.
    }
  });
}

export default getUserLocation;
