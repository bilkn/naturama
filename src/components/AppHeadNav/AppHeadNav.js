import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useActiveTab from '../../hooks/useActiveTab';
import './AppHeadNav.scss';
import Badge from '../Badge/Badge';
import UserContext from '../../context/UserContext';

function AppHeadNav() {
  useActiveTab('.app-head-nav-list__link', 'active-tab');
  const [userState] = useContext(UserContext);
  const { dailyList } = userState ? userState : { dailyList: [] };
  const count = dailyList.length || '';

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
        <li
          className="app-head-nav-list__item"
          style={{ position: 'relative' }}
        >
          {count && (
            <Badge count={count} className={'app-head-nav-list__badge'} />
          )}

          <Link to="/daily-place-list" className="app-head-nav-list__link">
            Daily List
          </Link>
        </li>
        <li className="app-head-nav-list__item">
          <Link to="/profile" className="app-head-nav-list__link" aria-label="Profile">
            <i className="fa fa-user" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeadNav;
