import React from 'react';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.scss';
function PlaceList(props) {
  const { list, setSelectedPlace, ...otherProps } = props;
  return (
    <ul className="place-list">
      {list &&
        list.map((place) => (
          <PlaceItem
            place={place}
            setSelectedPlace={setSelectedPlace}
            key={place.xid}
            {...otherProps}
          ></PlaceItem>
        ))}
    </ul>
  );
}

export default PlaceList;
