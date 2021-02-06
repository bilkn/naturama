import React from 'react';
import { Link } from 'react-router-dom';
import './MobilePictureNavTop.scss';
function MobilePictureNavTop({place}) {
  return (
    <div className="mobile-picture-nav-top">
      <Link className="mobile-picture-nav-top__link" to="/">
        <button className="mobile-picture-nav-top__btn">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      </Link>
      <p className="mobile-picture-nav-top__name">{(place && place.name) || ""}</p>
      <div className="mobile-picture-nav-top__empty-div"></div>
    </div>
  );
}

export default MobilePictureNavTop;
