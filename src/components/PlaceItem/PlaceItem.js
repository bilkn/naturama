import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PlaceItem.scss';
function PlaceItem({ place }) {
  return (
    <li className="place-item">
      <img className="place-item__img" src={createFileURL(place.img)} alt={place.content.name} />
      <p className="place-item__name">{place.content.name}</p>
    </li>
  );
}

export default PlaceItem;
