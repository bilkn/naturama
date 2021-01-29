import React from 'react';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import "./Place.scss";
function Place() {
  return (
    <div className="place">
      <PlaceContent />
      <PlaceDescription />
    </div>
  );
}



export default Place;
