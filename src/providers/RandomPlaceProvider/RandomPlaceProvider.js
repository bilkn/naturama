import React, { useState } from 'react';
import RandomPlaceContext from '../../context/RandomPlaceContext';
function PlaceProvider(props) {
  const [randomPlace, setRandomPlace] = useState(null);
  return (
    <RandomPlaceContext.Provider
      value={[randomPlace, setRandomPlace]}
      {...props}
    />
  );
}

export default PlaceProvider;
