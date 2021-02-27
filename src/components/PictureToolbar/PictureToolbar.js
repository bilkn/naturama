import React, { useContext } from 'react';
import ErrorContext from '../../context/ErrorContext';
import UserContext from '../../context/UserContext';
import db from '../../helpers/dexie';
import './PictureToolbar.scss';
function PictureToolbar(props) {
  const {
    place,
    setShowShareLinks,
    setShowDarkBackground,
    timerID,
    setTimerID,
  } = props;
  const [userState, dispatch] = useContext(UserContext);
  const [error] = useContext(ErrorContext);
  const handleShareClick = () => {
    setShowDarkBackground(true);
    setShowShareLinks(true);
  };

  const isPlaceInFav = () => {
    return userState.favourites.some((favPlace) => favPlace.xid === place.xid);
  };

  const handleFavClick = async () => {
    if (timerID) {
      clearTimeout(timerID);
    }
    const timeout = setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
      clearTimeout(timeout);
      setTimerID(() => null);
    }, 2000);

    setTimerID(() => timeout);
    const favResult = isPlaceInFav();
    const newPlaces = favResult
      ? [
          ...userState.favourites.filter(
            (favPlace) => favPlace.xid !== place.xid
          ),
        ]
      : [...userState.favourites, place];
    try {
      if (!favResult) {
        error.isDBActive && (await db.favourites.add(place, place.xid));
        dispatch({ type: 'ADD_PLACE', payload: newPlaces });
      } else {
        error.isDBActive &&
          (await db.favourites.where('xid').equals(place.xid).delete());
        dispatch({ type: 'REMOVE_PLACE', payload: newPlaces });
      }
    } catch (err) {
      console.log(err);
      //
    }
  };

  
  return (
    <nav className="picture-toolbar">
      <ul className="picture-toolbar-list">
        <li className="picture-toolbar-list__item">
          <button
            className="picture-toolbar-list__btn"
            onClick={handleShareClick}
          >
            <i className="fas fa-share-square picture-toolbar-list__icon"></i>
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button
            className="picture-toolbar-list__btn"
            onClick={handleFavClick}
          >
            {isPlaceInFav() ? (
              <i className="fas fa-star picture-toolbar-list__icon"></i>
            ) : (
              <i className="far fa-star picture-toolbar-list__icon"></i>
            )}
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button className="picture-toolbar-list__btn">
            <a href="https://api.opentripmap.com/0.1/en/tiles/pois/14/10/10.pbf?apikey=5ae2e3f221c38a28845f05b66e6185a474b772f0503b9bf316db4ad4"></a>
            <i className="fas fa-map picture-toolbar-list__icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PictureToolbar;
