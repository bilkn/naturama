function pickRandomPlace(places) {
  const { length } = places;
  const randomNumber = Math.round(Math.random() * length);
  // Prevents an item not in the array from being selected.
  // Generator function may be added in the future.
  const randomIndex = randomNumber > 0 ? randomNumber - 1 : 0;
  return length ? places[randomIndex] : [];
}

export default pickRandomPlace;
