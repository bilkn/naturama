import React from 'react';
import './PlaceItem.scss';

function PlaceItem(props) {
  const { place, children, onClick: handler, style } = props;
  const handleClick = () => {
    if (handler) handler(place);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handler(place);
  };
 
  const img = place.preview
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
        src={img}
        alt={place.content.name}
      />

      {children}
    </li>
  );
}

export default PlaceItem;
