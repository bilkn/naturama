import React from 'react'
import "./PlaceDetails.scss";
function PlaceDetails({place}) {

    return (
      <div className="place-details">
        <div className="place-details-location-container">
          <i className="fas fa-map-marker-alt place-details-location-container__icon"></i>
          <p className="place-details-location-container__name">Ecuador</p>
        </div>
        <p className="place-details__distance">Distance: 3350 km</p>
      </div>
    );
}

export default PlaceDetails
