import fetchData from './fetchData';

async function getPlaces(user) {
  const places = await fetchData(user);
  return places;
}

export default getPlaces;
