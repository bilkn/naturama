import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import UserContext from '../../context/UserContext';
import ErrorContext from '../../context/ErrorContext';
import IconButton from '../IconButton/IconButton';
import triggerRandomPlaceRequest from '../../helpers/triggerRandomPlaceRequest';
import UserRequestContext from '../../context/UserRequestContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';

function MobileNav() {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const location = useLocation();

  const handleShuffleClick = async () => {
    if (error.isGeoActive) {
      const errorState = [error, setError];
      const requestState = [canUserRequest, setCanUserRequest];
      const user = [userState, dispatch];
      const args = {
        user,
        requestState,
        errorState,
        setRandomPlace,
      };
      try {
        await triggerRandomPlaceRequest(args);
      } catch (err) {
        console.log(err);
        if (error.isPlaceFound) setError({ ...error, isPlaceFound: false });
      }
    }
  };

  useEffect(() => {
    const neglectedPaths = ['/favourites', '/fullscreen-picture', '/map'];
    const path = location.pathname;
    if (!neglectedPaths.includes(path)) {
      setSelectedPlace(null);
    }
  }, [location.pathname, setSelectedPlace]);
  
  useEffect(() => {
    let itemOrder = null;
    const path = location.pathname;
    switch (path) {
      case '/':
        itemOrder = 1;
        break;
      case '/favourites':
        itemOrder = 2;
        break;
      case '/profile':
        itemOrder = 4;
        break;
      case '/daily-place-list':
        itemOrder = 5;
        break;
      default:
        return;
    }
    const navItems = document.querySelectorAll('.mobile-nav-list li');
    navItems.forEach((item) => {
      item.classList.remove('active-tab');
    });
    const navItem = document.querySelector(
      `.mobile-nav-list li:nth-of-type(${itemOrder})`
    );
    navItem.classList.add('active-tab');
  }, [location.pathname, setSelectedPlace]);

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
            onClick={handleShuffleClick}
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
