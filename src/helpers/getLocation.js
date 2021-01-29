function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: Math.round(position.coords.latitude),
        lng: Math.round(position.coords.longitude),
      };
      console.log(location);
    });
  } else {
    console.log('No geolocation');
    // !!! ADD MODAL
  }
}

export default getLocation;
