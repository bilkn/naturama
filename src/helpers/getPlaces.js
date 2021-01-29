async function getPlaces (lat, lon) {
     const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=500000&lon=${lon}&lat=${lat}&kinds=natural&apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4`;
    const data = await fetch(url);
    const obj = await data.json();
    const places = obj.features;
    return places;
}
export default getPlaces;