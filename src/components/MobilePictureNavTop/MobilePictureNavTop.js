import React from 'react';
import { Link } from 'react-router-dom';
import './MobilePictureNavTop.scss';
function MobilePictureNavTop({ place, handleReturnClick }) {
  return (
    <div className="mobile-picture-nav-top">
      <Link
        className="mobile-picture-nav-top__link"
        to="/"
        onClick={handleReturnClick}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
      <p className="mobile-picture-nav-top__name">
        {(place && place.content.name) || ''}
      </p>
      <div className="mobile-picture-nav-top__empty-div"></div>
    </div>
  );
}

export default MobilePictureNavTop;
