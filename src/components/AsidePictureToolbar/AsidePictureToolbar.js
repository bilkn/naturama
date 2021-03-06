import React from 'react';
import IconButton from '../IconButton/IconButton';
import useFavourite from '../../hooks/useFavourite';
import "./AsidePictureToolbar.scss"
function AsidePictureToolbar() {
  const { handleFavClick, isPlaceInFav } = useFavourite(true);

  return (
    <aside className="aside-picture-toolbar">
      <ul className="aside-picture-toolbar-list">
        <li className="aside-picture-toolbar-list__item">
          <IconButton
            btnClass="aside-picture-toolbar-list__btn"
            iconClass="fas fa-share-square aside-picture-toolbar-list__icon"
          />
        </li>
        <li className="aside-picture-toolbar-list__item">
          <IconButton
            btnClass="aside-picture-toolbar-list__btn"
            iconClass={`${
              isPlaceInFav() ? 'fas' : 'far'
            } fa-star aside-picture-toolbar-list__icon`}
            onClick={handleFavClick}
          />
        </li>
        <li className="aside-picture-toolbar-list__item">
          <IconButton />
        </li>
      </ul>
    </aside>
  );
}

export default AsidePictureToolbar;
