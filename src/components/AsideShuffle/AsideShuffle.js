import React, { useContext } from 'react';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import PlaceItem from '../PlaceItem/PlaceItem';
import PlaceName from '../PlaceName/PlaceName';
import ShuffleBtn from '../ShuffleBtn/ShuffleBtn';
import './AsideShuffle.scss';

const activePlaceStyle = {
  outline: '3px solid #000',
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
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const displayedPlace = selectedPlace || randomPlace;
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <aside className="aside-shuffle">
      <div className="aside-shuffle__btn-wrapper">
        <ShuffleBtn className={'aside-shuffle__btn'} />
      </div>
      <ul className="aside-shuffle-place-list">
        {userState &&
          userState.shuffleHistory
            .slice(-4)
            .reverse()
            .map((place) => (
              <PlaceItem
                className="aside-shuffle__place-item"
                place={place}
                key={place.xid}
                onClick={handlePlaceClick}
                style={
                  (place.xid === displayedPlace?.xid && activePlaceStyle) || {}
                }
              >
                <PlaceName name={place.content.name} style={placeNameStyle} />
              </PlaceItem>
            ))}
      </ul>
    </aside>
  );
}

export default AsideShuffle;
