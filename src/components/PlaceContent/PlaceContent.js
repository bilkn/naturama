import React from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import "./PlaceContent.scss";
function PlaceContent() {
  return (
    <div className= "place-content">
      <PlaceThumbnail />
      <PlaceDetails />
    </div>
  );
}

export default PlaceContent;
