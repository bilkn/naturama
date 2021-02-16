import React from 'react';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';
function Place({ place, handleClick }) {
  return (
    <div className="place" onClick={handleClick}>
      <PlaceContent>
        <PlaceThumbnail
          place={place}
          classNames={['place-thumbnail']}
          icon="fas fa-map"
        />
        <PlaceDetails place={place} />
      </PlaceContent>
      <PlaceDescription place={place} />
    </div>
  );
}

export default Place;
