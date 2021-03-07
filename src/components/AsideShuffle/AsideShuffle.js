import React, { useContext } from 'react';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useFetchPlace from '../../hooks/useFetchPlace';
import IconButton from '../IconButton/IconButton';
import PlaceItem from '../PlaceItem/PlaceItem';
import PlaceName from '../PlaceName/PlaceName';
import './AsideShuffle.scss';
const placeItemStyle = {
  animation: 'slide-in-home 1s ease both',
  height: 'unset',
};
const placeNameStyle = {
  bottom: 0,
  borderBottomRightRadius: 0,
  fontSize: '0.7rem',
  maxWidth: '100%',
  padding: '0.3rem',
  top: 'unset',
  width: '100%',
};
function AsideShuffle({ userState }) {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const { fetchPlace } = useFetchPlace();

  const handlePlaceClick = (place) => {
    setRandomPlace(place);
    setSelectedPlace(place);
  };
  return (
    <aside className="aside-shuffle">
      <div className="aside-shuffle__btn-wrapper">
        <IconButton
          iconClass="fas fa-random"
          btnClass={'aside-shuffle__btn'}
          onClick={() => fetchPlace()}
        />
      </div>
      <ul className="aside-shuffle-place-list">
        {userState &&
          userState.shuffleHistory
            .slice(-4)
            .reverse()
            .map((place) => (
              <PlaceItem
                place={place}
                key={place.xid}
                style={placeItemStyle}
                onClick={handlePlaceClick}
              >
                <PlaceName name={place.content.name} style={placeNameStyle} />
              </PlaceItem>
            ))}
      </ul>
    </aside>
  );
}

export default AsideShuffle;
