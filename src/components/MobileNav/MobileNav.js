import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import UserContext from '../../context/UserContext';
import IconButton from '../IconButton/IconButton';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useFetchPlace from '../../hooks/useFetchPlace';

function MobileNav() {
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const {fetchPlace} =  useFetchPlace();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const neglectedPaths = ['/fullscreen-picture', '/map'];
    const path = location.pathname;
    if (!neglectedPaths.includes(path)) {
      setSelectedPlace(null);
    }
  }, [location.pathname, setSelectedPlace, history]);

  // It adds "active-tab" class for styling, and removes the class from other tabs according to the path.
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
      case '/help':
      case '/preferences':
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
