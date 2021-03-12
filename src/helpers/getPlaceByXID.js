async function getPlaceByXID(xid) {
  if (xid) {
    const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4`;
    const data = await fetch(url);
    const place = await data.json();
    console.log(place)
    return place;
  } else {
    throw Error("No place was found.")
  }
}
export default getPlaceByXID;
