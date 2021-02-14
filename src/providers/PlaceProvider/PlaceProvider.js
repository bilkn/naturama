import React, {useState} from 'react';
import PlaceContext from '../../context/PlaceContext';
function PlaceProvider(props) {
  const [place, setPlace] = useState(null);
  return <PlaceContext.Provider value={[place, setPlace]} {...props} />;
}

export default PlaceProvider;
