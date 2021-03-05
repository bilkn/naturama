import React from 'react';
import IconButton from '../IconButton/IconButton';
import PlaceItem from '../PlaceItem/PlaceItem';
function AsideShuffle() {
  return (
    <aside className="aside-shuffle">
      <IconButton iconClass="fas fa-random" />
      <ul className="aside-shuffle-place-list">
        <PlaceItem />
      </ul>
    </aside>
  );
}

export default AsideShuffle;
