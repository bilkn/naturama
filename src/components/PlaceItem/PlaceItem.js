import React from 'react';
import './PlaceItem.scss';
import NoImg from '../../assets/no-img.svg';
const NoImgStyle = {
  height: '100px',
  display: 'block',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100px',
};
function PlaceItem(props) {
  const { place, children, onClick: handler, style, className } = props;
  const handleClick = () => {
    if (handler) handler(place);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handler(place);
  };

  const img = place.preview;
  return (
    <li
      className={`place-item ${className || ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      tabIndex="0"
    >
      <img
        className="place-item__img"
        src={img || NoImg}
        style={img ? {} : NoImgStyle}
        alt={place.content.name}
      />

      {children}
    </li>
  );
}

export default PlaceItem;
