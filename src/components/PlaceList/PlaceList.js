import React from 'react';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.scss';
function PlaceList(props) {
  const { userState, setSelectedPlace } = props;
  return (
    <ul className="place-list">
      {userState &&
        userState.dailyList.map((place) => (
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
