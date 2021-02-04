import React from 'react';
import './PictureToolbar.scss';
function PictureToolbar() {
  return (
    <nav className="picture-toolbar">
      <ul className="picture-toolbar-list">
        <li className="picture-toolbar-list__item">
          <button className="picture-toolbar-list__btn">
            <i className="fas fa-share-square picture-toolbar-list__icon"></i>
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button className="picture-toolbar-list__btn">
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
