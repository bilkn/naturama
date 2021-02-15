import createUserTemplate from './createUserTemplate';
import fetchData from './fetchData';
import filterPlacesByPreferences from './filterPlacesByPreferences';

async function getDailyPlaceList(user, placeCount = 5) {
  const userData = user ? user : await createUserTemplate();
  const places = await fetchData(userData);
  const filteredPlaces = filterPlacesByUserHistory(
    userData,
    filterPlacesByPreferences(places)
  );
  return filteredPlaces.slice(0, placeCount);
}

function filterPlacesByUserHistory(user, places) {
  return places.filter((place) => !user.history.includes(place.xid));
}

export default getDailyPlaceList;
