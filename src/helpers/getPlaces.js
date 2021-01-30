import fetchData from './fetchdata';

async function getPlaces(lat, lon) {
  const places = await fetchData(lat, lon);
  return places;
}

export default getPlaces;
