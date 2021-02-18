function getUserLocation() {

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((resp) => {
        resp.state === 'denied' && reject('GEOLOCATION_DENIED');
      });
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = Math.round(position.coords.latitude);
        const lon = Math.round(position.coords.longitude);
        const location = {
          lat: lat,
          lon: lon,
        };
        console.log('hello');
        resolve(location);
      });
    } else {
      reject('NO_GEOLOCATION');
    }
  });
}

export default getUserLocation;
