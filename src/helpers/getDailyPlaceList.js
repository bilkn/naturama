import createPlaceForUserData from './createPlaceForUserData';
import createUserTemplate from './createUserTemplate';
import fetchData from './fetchData';
import filterPlacesByPreferences from './filterPlacesByPreferences';
import getPlaceByXID from './getPlaceByXID';

async function getDailyPlaceList(user, placeCount = 5) {
  const userData = user ? user : await createUserTemplate();
  const places = await fetchData(userData);
  const filteredPlaces = filterPlacesByUserHistory(
    userData,
    filterPlacesByPreferences(places)
  );

  return Promise.all(
    filteredPlaces.slice(0, placeCount).map(async (place) => {
      const placeData = await getPlaceByXID(place.properties.xid);
      const distance = Math.round(place.properties.dist/1000).toFixed();
      console.log(distance, "daily place list")
      return {
        ...placeData,
        distance: distance,
      };
    })
  ).then((places) =>
    Promise.all(
      places.map(async (place) => await createPlaceForUserData(place))
    )
  );
}

function filterPlacesByUserHistory(user, places) {
  return places.filter((place) => !user.history.includes(place.xid));
}

export default getDailyPlaceList;
