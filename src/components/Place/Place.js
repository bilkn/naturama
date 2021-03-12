import React from 'react';
import Attribution from '../Attribution/Attribution';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';

function Place(props) {
  const { place, handleClick, children } = props;
  return (
    <div className="place">
      {children}
      <PlaceContent>
        <PlaceThumbnail
          place={place}
          icon="fas fa-map"
          handleClick={handleClick}
        />
        <PlaceDetails place={place} />
        <PlaceDescription place={place} />
        <Attribution place={place} />
      </PlaceContent>
    </div>
  );
}

export default Place;
