import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import UserContext from '../../context/UserContext';
import IconButton from '../IconButton/IconButton';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useFetchPlace from '../../hooks/useFetchPlace';
import useActiveTab from '../../hooks/useActiveTab';

function MobileNav() {
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const {fetchPlace} =  useFetchPlace();
  const location = useLocation();
  const history = useHistory();
  useActiveTab();

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
        <li className="mobile-nav-list-item mobile-nav-list-item--shuffle-item">
          <IconButton
            btnClass="mobile-nav-list-item__btn"
            iconClass="fas fa-random  mobile-nav-list-item__icon"
            onClick={() => fetchPlace()}
          />
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
