function pickRandomPlace(places) {
  console.log(places, 'random place');
  const length = places.length;
  const randomNumber = Math.round(Math.random() * length);
  // Prevents an item not in the array from being selected.
  const randomIndex = randomNumber > 0 ? randomNumber - 1 : 0;
  console.log(randomIndex, 'randomIndex');
  return length ? places[randomIndex] : [];
}

export default pickRandomPlace;
