import React from 'react';
import { Link } from 'react-router-dom';
import './PictureToolbar.scss';
import useFavourite from '../../hooks/useFavourite';
function PictureToolbar(props) {
  const { setShowShareLinks, setShowDarkBackground } = props;
  const { handleFavClick, isPlaceInFav } = useFavourite();
  
  const handleShareClick = () => {
    setShowDarkBackground(true);
    setShowShareLinks(true);
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
