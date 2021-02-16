async function fetchData(user) {
  console.log(user)
  const preferences = user.profile.preferences;
  const location = preferences.location;
  const lat = location.lat;
  const lon = location.lon;
  const searchRadius = preferences.radius;
  const radiusInCm = searchRadius * 1000;
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radiusInCm}&lon=${lon}&lat=${lat}&kinds=natural&apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4`;
  try {
    const data = await fetch(url);
    const obj = await data.json();
    const places = obj.features;
    return places;
  } catch (err) {
    console.log(err);
    // !!! Add notification
  }
}

export default fetchData;
