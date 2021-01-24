import React from 'react'

function PlaceDetails() {
    return (
      <div className="place-details">
        <div className="place-details-location-container">
          <i className="fas fa-map-marker-alt place-details-location-container__icon"></i>
          <p className="place-details-location-container__name"></p>
        </div>
        <p className="place-details__distance"></p>
      </div>
    );
}

export default PlaceDetails
