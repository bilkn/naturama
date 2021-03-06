import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import noImg from '../../assets/no-image-item.png';
import './PlaceItem.scss';

function PlaceItem(props) {
  const { place, setSelectedPlace, children, ...otherProps } = props;
  const { onClick: handler, style } = otherProps;
  const handleClick = () => {
    setSelectedPlace(place);
    if (handler) handler(place);
  };
  return (
    <li
      className="place-item"
      onClick={handleClick}
      style={style}
    >
      <img
        className="place-item__img"
        src={place.img ? createFileURL(place.img) : noImg}
        alt={place.content.name}
      />

      {children}
    </li>
  );
}

export default PlaceItem;
