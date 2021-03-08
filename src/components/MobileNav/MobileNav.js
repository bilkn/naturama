import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useActiveTab from '../../hooks/useActiveTab';
import ShuffleBtn from '../ShuffleBtn/ShuffleBtn';

function MobileNav() {
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const location = useLocation();
  const history = useHistory();
  useActiveTab('.mobile-nav-list-item__link', 'active-tab');

  useEffect(() => {
    const neglectedPaths = ['/fullscreen-picture', '/map'];
    const path = location.pathname;
    if (!neglectedPaths.includes(path)) {
      setSelectedPlace(null);
    }
  }, [location.pathname, setSelectedPlace, history]);

  return (
    <nav
      className="mobile-nav"
      style={{
        visibility:
          location.pathname === '/fullscreen-picture' ? 'hidden' : 'visible',
      }}
    >
      <ul className="mobile-nav-list">
        <li className="mobile-nav-list-item ">
          <Link to="/" className="mobile-nav-list-item__link">
            <i className="fas fa-home mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/favourites" className="mobile-nav-list-item__link">
            <i className="fas fa-star mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item">
          <ShuffleBtn className={'mobile-nav-list-item--shuffle-btn'} />
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/profile" className="mobile-nav-list-item__link">
            <i className="fas fa-user mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/daily-place-list" className="mobile-nav-list-item__link">
            <i className="fas fa-list-alt mobile-nav-list-item__icon">
              {userState ? (
                userState.dailyList.length ? (
                  <span className="mobile-nav-list-item__counter">
                    {userState.dailyList.length}
                  </span>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
