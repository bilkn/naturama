import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PlaceItem.scss';
function PlaceItem(props) {
  const { place, setSelectedPlace, children } = props;
  return (
    <li className="place-item" onClick={()=>setSelectedPlace(place)}>
      <img
        className="place-item__img"
        src={place.img ? createFileURL(place.img) : '../../assets/no-image.png'}
        alt={place.content.name}
      />
      <p className="place-item__name">{place.content.name}</p>
      {children}
    </li>
  );
}

export default PlaceItem;
