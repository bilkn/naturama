import fetchData from './fetchdata';

async function getPlaces(user) {
  const places = await fetchData(user);
  return places;
}

export default getPlaces;
