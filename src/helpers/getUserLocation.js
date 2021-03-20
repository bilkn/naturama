function getUserLocation() {
  return new Promise((resolve) => {
    const options = {
      timeout: 6000,
    };
    const error = () => {
      console.log("Location couldn't set.")
      resolve({ lat: '', lon: '' });
    };
    const success = (position) => {
      const lat = Math.round(position.coords.latitude);
      const lon = Math.round(position.coords.longitude);
      resolve({lat, lon});
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  });
}

export default getUserLocation;
