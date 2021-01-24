import React from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';

function PlaceContent() {
  return (
    <div>
      <PlaceThumbnail />
      <PlaceDetails />
    </div>
  );
}

export default PlaceContent;
