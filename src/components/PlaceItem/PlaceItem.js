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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') setSelectedPlace(place);
  };
  return (
    <li
      className="place-item"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      tabIndex="0"
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
