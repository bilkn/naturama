import React from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './PlaceContent.scss';
function PlaceContent({ children }) {
  return <div className="place-content">{children}</div>;
}

export default PlaceContent;
