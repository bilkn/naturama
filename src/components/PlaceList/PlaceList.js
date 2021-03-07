import React from 'react';
import PlaceItem from '../PlaceItem/PlaceItem';
import PlaceName from '../PlaceName/PlaceName';
import './PlaceList.scss';
const placeNameStyle = {
  bottom: 0,
  borderBottomRightRadius: 0,
  maxWidth: '100%',
  top: 'unset',
  width: '100%',
};
function PlaceList(props) {
  const { list, handlePlaceClick, ...otherProps } = props;

  return (
    <ul className="place-list">
      {list &&
        list.map((place) => (
          <PlaceItem
            place={place}
            onClick={handlePlaceClick}
            key={place.xid}
            {...otherProps}
          >
            <PlaceName name={place.content.name} style={placeNameStyle} />
          </PlaceItem>
        ))}
    </ul>
  );
}

export default PlaceList;
