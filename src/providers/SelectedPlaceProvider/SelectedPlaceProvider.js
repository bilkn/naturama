import React, { useState } from 'react';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
function SelectedPlaceProvider(props) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <SelectedPlaceContext.Provider
      value={[selectedPlace, setSelectedPlace]}
      {...props}
    />
  );
}

export default SelectedPlaceProvider;
