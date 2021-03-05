import React from 'react';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';
function Place({ place, handleClick, children }) {
  return (
    <div className="place" onClick={handleClick}>
      {children}
      <PlaceContent>
        <PlaceThumbnail place={place} icon="fas fa-map" />
        <PlaceDetails place={place} />
        <PlaceDescription place={place} />
      </PlaceContent>
    </div>
  );
}

export default Place;
