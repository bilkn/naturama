import React from 'react';
import { Link } from 'react-router-dom';
import "./AppHeadNav.scss"
function AppHeadNav() {
  return (
    <nav className="app-head-nav">
      <ul className="app-head-nav-list">
        <li className="app-head-nav-list__item">
          <Link to="/" className="app-head-nav-list__link">
            Home
          </Link>
        </li>
        <li className="app-head-nav-list__item">
          <Link to="/favourites" className="app-head-nav-list__link">
            Favourites
          </Link>
        </li>
        <li className="app-head-nav-list__item">
          <Link to="/daily-place-list" className="app-head-nav-list__link">
            Daily List
          </Link>
        </li>
        <li className="app-head-nav-list__item no-margin">
          <Link to="/profile" className="app-head-nav-list__link">
            <i className="fa fa-user" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeadNav;
