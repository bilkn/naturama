import React, { useContext, useLayoutEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useActiveTab from '../../hooks/useActiveTab';
import ShuffleBtn from '../ShuffleBtn/ShuffleBtn';
import Badge from '../Badge/Badge';

function MobileNav() {
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  useActiveTab('.mobile-nav-list-item__link', 'active-tab');

  useLayoutEffect(() => {
    const neglectedPaths = ['/fullscreen-picture', '/map'];
    const path = pathname;
    if (!neglectedPaths.includes(path)) {
      setSelectedPlace(null);
    }
  }, [pathname, setSelectedPlace, history]);
  
  if (pathname === '/map' || pathname === '/fullscreen-picture') return <></>;

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
          <Link to="/" className="mobile-nav-list-item__link" aria-label="Home">
            <i className="fas fa-home mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item">
          <Link
            to="/favourites"
            className="mobile-nav-list-item__link"
            aria-label="Favourites"
          >
            <i className="fas fa-star mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item mobile-nav-list-item--no-hover-effect">
          <ShuffleBtn className={'mobile-nav-list-item--shuffle-btn'} />
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/profile" className="mobile-nav-list-item__link" aria-label="Profile">
            <i className="fas fa-user mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/daily-place-list" className="mobile-nav-list-item__link" aria-label="Daily place list">
            <i className="fas fa-list-alt mobile-nav-list-item__icon">
              {userState ? (
                userState.dailyList.length ? (
                  <Badge count={userState.dailyList.length} />
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
