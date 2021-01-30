function pickRandomPlace(places) {
  const length = places.length;
  const randomIndex = Math.round(Math.random() * length);
  return places[randomIndex];
}

export default pickRandomPlace;