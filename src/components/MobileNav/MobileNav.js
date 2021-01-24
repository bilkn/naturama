import React from 'react';
import "./MobileNav.scss";
function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav-list">
        <li className="mobile-nav-list-item">
          <button className="mobile-nav-list-item__btn">
            <i className="fas fa-home mobile-nav-list-item__icon"></i>
          </button>
        </li>
        <li className="mobile-nav-list-item">
          <button className="mobile-nav-list-item__btn">
            <i className="fas fa-star mobile-nav-list-item__icon"></i>
          </button>
        </li>
        <li className="mobile-nav-list-item mobile-nav-list-item--shuffle-item">
          <button className="mobile-nav-list-item__btn">
            <i className="fas fa-random mobile-nav-list-item__icon"></i>
          </button>
        </li>
        <li className="mobile-nav-list-item ">
          <button className="mobile-nav-list-item__btn">
            <i className="fas fa-user mobile-nav-list-item__icon"></i>
          </button>
        </li>
        <li className="mobile-nav-list-item ">
          <button className="mobile-nav-list-item__btn">
            <i className="fas fa-list-alt mobile-nav-list-item__icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
