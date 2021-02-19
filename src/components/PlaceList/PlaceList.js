import React from 'react';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.scss';
function PlaceList(props) {
  const { list, setSelectedPlace } = props;
  return (
    <ul className="place-list">
      {list &&
        list.map((place) => (
          <PlaceItem
            place={place}
            setSelectedPlace={setSelectedPlace}
            key={place.xid}
          >
            {/* <IconButton btnClass="icon-btn" iconClass="fas fa-star" /> */}
          </PlaceItem>
        ))}
    </ul>
  );
}

export default PlaceList;
