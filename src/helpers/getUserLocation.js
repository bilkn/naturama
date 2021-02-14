function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = Math.round(position.coords.latitude);
        const lon = Math.round(position.coords.longitude);
        const location = {
          lat: lat,
          lon: lon,
        };
        resolve(location);
      });
    } else {
      reject();
    }
  });
}



export default getUserLocation;
