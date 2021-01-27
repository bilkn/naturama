import React from 'react';
import './MobilePictureNavBottom.scss';
function MobilePictureNavBottom() {
  return (
    <nav className="mobile-picture-nav-bottom">
      <ul className="mobile-picture-nav-bottom-list">
        <li className="mobile-picture-nav-bottom-list__item">
          <button className="mobile-picture-nav-bottom-list__btn">
            <i className="fas fa-share-square mobile-picture-nav-bottom-list__icon"></i>
          </button>
        </li>
        <li className="mobile-picture-nav-bottom-list__item">
          <button className="mobile-picture-nav-bottom-list__btn">
            <i className="fas fa-star mobile-picture-nav-bottom-list__icon"></i>
          </button>
        </li>
        <li className="mobile-picture-nav-bottom-list__item">
          <button className="mobile-picture-nav-bottom-list__btn">
            <i className="fas fa-map mobile-picture-nav-bottom-list__icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MobilePictureNavBottom;
