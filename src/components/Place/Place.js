import React, { useContext, useState } from 'react';
import PlaceContext from '../../context/PlaceContext';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';
function Place() {
  const context = useContext(PlaceContext);
  const [place, setPlace] = context;

  return (
    <div className="place">
      <PlaceContent>
        <PlaceThumbnail classNames={['place-thumbnail']} icon="fas fa-map" />
        <PlaceDetails place={place} />
      </PlaceContent>
      <PlaceDescription place={place} />
    </div>
  );
}

export default Place;
