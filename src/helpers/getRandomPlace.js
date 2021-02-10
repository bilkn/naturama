import getPlaceByXID from './getPlaceByXID';
import getPlaces from './getPlaces';
import pickRandomPlace from './pickRandomPlace';
import filterPlacesByPreferences from './filterPlacesByPreferences';

export async function getRandomPlace(user) {
  const places = await getPlaces(user);
  console.table(places)
  const filteredPlaces =  filterPlacesByPreferences(places);
  const randomPlace =  pickRandomPlace(filteredPlaces);
  const xid = randomPlace.properties.xid;
  const place = await getPlaceByXID(xid);
  return place;
}
