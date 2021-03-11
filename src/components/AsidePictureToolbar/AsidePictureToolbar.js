import React, { useContext, useRef} from 'react';
import IconButton from '../IconButton/IconButton';
import useFavourite from '../../hooks/useFavourite';
import './AsidePictureToolbar.scss';
import { Link } from 'react-router-dom';
import AsideShareLinkList from '../AsideShareLinkList/AsideShareLinkList';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import RandomPlaceContext from '../../context/RandomPlaceContext';

function AsidePictureToolbar() {
  const { handleFavClick, isPlaceInFav } = useFavourite();
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const shareLinkList = useRef(null);

  const handleShareClick = () => {
    if (selectedPlace || randomPlace) {
      shareLinkList.current.classList.toggle('aside-share-link-list--open');
    }
  };

  return (
    <aside className="aside-picture-toolbar">
      <AsideShareLinkList shareLinkList={shareLinkList} />
      <ul className="aside-picture-toolbar-list">
        <li className="aside-picture-toolbar-list__item">
          <IconButton
            btnClass=" aside-picture-toolbar-list__btn aside-picture-toolbar-list__btn--margin-left"
            iconClass="fas fa-share-square aside-picture-toolbar-list__icon"
            onClick={handleShareClick}
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
          <Link to="/map" className="aside-picture-toolbar-list__link">
            <i className="fas fa-map aside-picture-toolbar-list__icon" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AsidePictureToolbar;
