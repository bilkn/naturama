import React from 'react';
import IconButton from '../IconButton/IconButton';
import PlaceItem from '../PlaceItem/PlaceItem';
import './AsideShuffle.scss';
function AsideShuffle({ userState }) {
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error, setError] = useContext(ErrorContext);
  {
    userState && console.log(userState.shuffleHistory.slice(-4));
  }
  return (
    <aside className="aside-shuffle">
      <IconButton iconClass="fas fa-random" onClick={trigger}/>
      <ul className="aside-shuffle-place-list">
        {userState &&
          userState.shuffleHistory
            .slice(-4)
            .map((place) => <PlaceItem place={place} key={place.xid} />)}
      </ul>
    </aside>
  );
}

export default AsideShuffle;
