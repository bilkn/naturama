function filterPlacesByPreferences(places) {
  return places.filter((place) => place.properties.wikidata);
}
// !!! This function can be changed. 
export default filterPlacesByPreferences;
