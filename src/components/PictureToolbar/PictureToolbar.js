import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ErrorContext from '../../context/ErrorContext';
import UserContext from '../../context/UserContext';
import clearNotificationIfExist from '../../helpers/clearNotificationIfExist';
import db from '../../helpers/dexie';
import './PictureToolbar.scss';

function PictureToolbar(props) {
  const { place, setShowShareLinks, setShowDarkBackground } = props;
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
    clearNotificationIfExist(userState, dispatch);


    const favResult = isPlaceInFav();
    const newPlaces = favResult
      ? [
          ...userState.favourites.filter(
            (favPlace) => favPlace.xid !== place.xid
          ),
        ]
      : [...userState.favourites, place];
    try {
      await handleFavOperation({ newPlaces, favResult });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavOperation = async (args) => {
    const { newPlaces, favResult } = args;
    const payload = newPlaces;
    if (!favResult) {
      error.isDBActive && (await db.favourites.add(place, place.xid));
      dispatch({
        type: 'ADD_PLACE',
        payload,
      });
    } else {
      error.isDBActive &&
        (await db.favourites.where('xid').equals(place.xid).delete());
      dispatch({
        type: 'REMOVE_PLACE',
        payload,
      });
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
          <Link to="/map" className="picture-toolbar-list__link">
            <i className="fas fa-map picture-toolbar-list__icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PictureToolbar;
