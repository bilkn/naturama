import createPlaceForUserData from './createPlaceForUserData';
import createUser from './createUser';
import fetchData from './fetchData';
import filterPlacesByPreferences from './filterPlacesByPreferences';
import getPlaceByXID from './getPlaceByXID';

async function getDailyPlaceList(user, placeCount = 5) {
  const userData = user || (await createUser());
  const places = await fetchData(userData);
  const filteredPlaces = filterPlacesByPreferences(userData, places);

  return Promise.all(
    filteredPlaces.slice(0, placeCount).map(async (place) => {
      
      const placeData = await getPlaceByXID(place.properties.xid);
      const distance = Math.round(place.properties.dist / 1000).toFixed();
      return {
        ...placeData,
        distance,
      };
    })
  ).then((places) =>
    Promise.all(
      places.map(async (place) => await createPlaceForUserData(place))
    )
  );
}



export default getDailyPlaceList;
