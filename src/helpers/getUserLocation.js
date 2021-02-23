function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((resp) => {
        resp.state === 'denied' && resolve({ lat: '', lon: '' });
      });
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = Math.round(position.coords.latitude);
        const lon = Math.round(position.coords.longitude);
        const location = {
          lat,
          lon,
        };
        resolve(location);
      });
    } else {
      reject('NO_GEOLOCATION');
    }
  });
}

export default getUserLocation;
