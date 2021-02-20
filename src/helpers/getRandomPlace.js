import getPlaceByXID from './getPlaceByXID';
import getPlaces from './getPlaces';
import pickRandomPlace from './pickRandomPlace';
import filterPlacesByPreferences from './filterPlacesByPreferences';

export async function getRandomPlace(user) {
  const places = await getPlaces(user);
  // !!! Add userState.
  const filteredPlaces = filterPlacesByPreferences(user, places);
  const randomPlace = pickRandomPlace(filteredPlaces);
  const xid = randomPlace.properties.xid;
  const placeData = await getPlaceByXID(xid);
  const place = {
    ...placeData,
    distance: Math.round(randomPlace.properties.dist/1000).toFixed(),
  };
  return place;
}
