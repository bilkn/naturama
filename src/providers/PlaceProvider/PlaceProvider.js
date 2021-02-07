import React from 'react';
import PlaceContext from '../../context/PlaceContext';
function PlaceProvider(props) {
  const [place, setPlace] = React.useState(null);
  return <PlaceContext.Provider value={[place, setPlace]} {...props} />;
}

export default PlaceProvider;
