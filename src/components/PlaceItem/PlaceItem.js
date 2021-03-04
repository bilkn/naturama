import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import noImg from '../../assets/no-image-item.png';
import './PlaceItem.scss';
import PlaceName from '../PlaceName/PlaceName';
const nameStyle = {
  bottom: 0,
  borderBottomRightRadius: 0,
  maxWidth: "100%",
  top: 'unset',
  width: '100%',
};
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
      <PlaceName name={place.content.name} style={nameStyle} />
      {children}
    </li>
  );
}

export default PlaceItem;
