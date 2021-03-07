import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import noImg from '../../assets/no-image-item.png';
import './PlaceItem.scss';

function PlaceItem(props) {
  const { place, children, ...otherProps } = props;
  const { onClick: handler, style } = otherProps;
  const handleClick = () => {
    if (handler) handler(place);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handler(place);
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
