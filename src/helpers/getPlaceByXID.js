async function GetPlaceByXID() {
  const xid = 'R4682064';
  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4`;
  try {
    const data = await fetch(url);
    const place = await data.json();
    return place;
  } catch (err) {
    console.log(err);
    // !!! Add modal
  }
}
export default GetPlaceByXID;
