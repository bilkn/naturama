async function fetchData(user) {
  const {
    profile: { preferences },
  } = user;
  const { location } = preferences;
  const { lat } = location;
  const { lon } = location;
  const { radius } = preferences;
  const radiusInMeters = radius * 1000;
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radiusInMeters}&lon=${lon}&lat=${lat}&kinds=natural&apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4`;

  const data = await fetch(url);
  const obj = await data.json();
  const places = obj.features;
  return places;
}

export default fetchData;
