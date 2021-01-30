function filterPlacesByPreferences(places) {
  return places.filter((place) => place.properties.wikidata);
}

export default filterPlacesByPreferences;
