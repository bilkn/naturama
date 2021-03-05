import React from 'react';
import useFetchPlace from '../../hooks/useFetchPlace';
import IconButton from '../IconButton/IconButton';
import PlaceItem from '../PlaceItem/PlaceItem';
import PlaceName from '../PlaceName/PlaceName';
import './AsideShuffle.scss';
const placeItemStyle = {
  height: '20%',
  width: '70%',
};
const placeNameStyle = {
  bottom: 0,
  borderBottomRightRadius: 0,
  fontSize: '0.7rem',
  maxWidth: '100%',
  padding: "0.3rem",
  top: 'unset',
  width: '100%',
};
function AsideShuffle({ userState }) {
  const { fetchPlace } = useFetchPlace();
  {
    userState && console.log(userState.shuffleHistory.slice(-4));
  }
  return (
    <aside className="aside-shuffle">
      <IconButton iconClass="fas fa-random" onClick={() => fetchPlace()} />
      <ul className="aside-shuffle-place-list">
        {userState &&
          userState.shuffleHistory.slice(-4).map((place) => (
            <PlaceItem place={place} key={place.xid} style={placeItemStyle}>
              <PlaceName name={place.content.name} style={placeNameStyle} />
            </PlaceItem>
          ))}
      </ul>
    </aside>
  );
}

export default AsideShuffle;
