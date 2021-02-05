import React from 'react';
import { Link } from 'react-router-dom';
import './MobilePictureNavTop.scss';
function MobilePictureNavTop() {
  return (
    <div className="mobile-picture-nav-top">
      <Link className="mobile-picture-nav-top__link" to="/">
        <button className="mobile-picture-nav-top__btn">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      </Link>
    </div>
  );
}

export default MobilePictureNavTop;
