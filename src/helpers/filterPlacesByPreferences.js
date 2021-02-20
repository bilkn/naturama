function filterPlacesByPreferences(user, places) {
  return places.filter(
    (place) =>
      place.properties.wikidata && !user.history.includes(place.properties.xid)
  );
}
export default filterPlacesByPreferences;
