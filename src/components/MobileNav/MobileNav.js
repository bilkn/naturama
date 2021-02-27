import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import UserContext from '../../context/UserContext';
import ErrorContext from '../../context/ErrorContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import IconButton from '../IconButton/IconButton';
import triggerRandomPlaceRequest from '../../helpers/triggerRandomPlaceRequest';
import UserRequestContext from '../../context/UserRequestContext';

function MobileNav() {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error, setError] = useContext(ErrorContext);
  const [canUserRequest, setCanUserRequest] = useContext(UserRequestContext);
  const location = useLocation();

  const handleShuffleClick = async () => {
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
      setError({ ...error, isPlaceFound: false });
    }
  };

  const handleNavClick = (e) => {
    const nav = e.target.closest('nav');
    const clickedItem = e.target.closest('li');
    const listArray = Array.from(nav.querySelectorAll('li'));
    listArray.forEach((li) => {
      if (li.classList.contains('active-tab'))
        li.classList.remove('active-tab');
    });
    clickedItem.classList.add('active-tab');
    setSelectedPlace(null);
  };

  useEffect(() => {

   
  }, [location])

  return (
    <nav
      className="mobile-nav"
      onClick={handleNavClick}
      style={{
        visibility:
          location.pathname === '/fullscreen-picture' ? 'hidden' : 'visible',
      }}
    >
      <ul className="mobile-nav-list">
        <li className="mobile-nav-list-item">
          <Link to="/" className="mobile-nav-list-item__link">
            <i className="fas fa-home mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item">
          <Link to="/favourites" className="mobile-nav-list-item__link">
            <i className="fas fa-star mobile-nav-list-item__icon" />
          </Link>
        </li>
        <li className="mobile-nav-list-item mobile-nav-list-item--shuffle-item">
          <IconButton
            btnClass="mobile-nav-list-item__btn"
            iconClass="fas fa-random  mobile-nav-list-item__icon"
            handleBtnClick={handleShuffleClick}
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
