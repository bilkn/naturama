import React from 'react';
import './PlaceDescription.scss';
function PlaceDescription({ place }) {
  let placeText = null;
  if (place && place.content.text) {
    placeText = place.content.text;
  }
  return (
    <div className="place-description">
      <p className="place-description__text">{placeText || ''}</p>
    </div>
  );
}

export default PlaceDescription;
