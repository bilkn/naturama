import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import noImg from '../../assets/no-image-item.png';
import './PlaceItem.scss';
function PlaceItem(props) {
  const { place, setSelectedPlace, children, ...otherProps } = props;
  const handleClick = () => {
    setSelectedPlace(place);
    const { onClick: handler } = otherProps;
    if (handler) handler(place);
  };
  return (
    <li className="place-item" onClick={handleClick}>
      <img
        className="place-item__img"
        src={place.img ? createFileURL(place.img) : noImg}
        alt={place.content.name}
      />
      <p className="place-item__name">{place.content.name}</p>
      {children}
    </li>
  );
}

export default PlaceItem;
