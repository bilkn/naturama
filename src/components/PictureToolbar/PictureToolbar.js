import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import db from '../../helpers/dexie';
import './PictureToolbar.scss';
function PictureToolbar(props) {
  const { place, setShowShareLinks, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const handleShareClick = () => {
    setShowDarkBackground(true);
    setShowShareLinks(true);
  };

  const handleFavClick = async () => {
    if (!(userState.favourites.some((favPlace) => favPlace.xid === place.xid))) {
      const favPlace = await createPlaceForUserData(place);
      const newPlaces = [...userState.favourites, favPlace];
      try {
        await db.favourites.add(favPlace, favPlace.xid);
        dispatch({ type: 'ADD_PLACE', payload: newPlaces });
      } catch (err) {
        console.log(err);
        // Add notification.
      }
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
            <i className="fas fa-star picture-toolbar-list__icon"></i>
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button className="picture-toolbar-list__btn">
            <i className="fas fa-map picture-toolbar-list__icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PictureToolbar;
