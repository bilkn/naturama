import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.scss';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import UserContext from '../../context/UserContext';
import ErrorContext from '../../context/ErrorContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import db from '../../helpers/dexie';
import tryToSetLocation from '../../helpers/tryToSetLocation';
import IconButton from '../IconButton/IconButton';

function MobileNav() {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [canUserRequest, setCanUserRequest] = useState(true);
  const [error, setError] = useContext(ErrorContext);
  const location = useLocation();

  const handleShuffleClick = async () => {};

  const preventRequestForAWhile = () => {
    setRandomPlace(() => null);
    setCanUserRequest(() => false);
    const timeout = setTimeout(() => {
      setCanUserRequest(() => true);
      clearTimeout(timeout);
    }, 2000);
  };

  const triggerRandomPlaceRequest = async () => {
    const {
      location: { lat },
      location: { lon },
    } = userState.profile.preferences;
    if (!lat || !lon) {
      const user = [userState, dispatch];
      await tryToSetLocation(user);
    } else if (canUserRequest) {
      preventRequestForAWhile();
      try {
        await requestRandomPlace();
      } catch (err) {
        setError({ ...error, isPlaceFound: false });
      }
    } else {
      console.log('You can fetch after 2 sec.');
      // !!! Add notif.
    }
  };
  
  const requestRandomPlace = async () => {
    const place = await getRandomPlace(userState); // !!! Add stop system for fetching after unmount.
    const userPlace = await createPlaceForUserData(place);
    const newHistory = [...userState.history, userPlace.xid];

    // If place is found, isPlaceFound will set to true.
    if (!error.isPlaceFound) setError({ ...error, isPlaceFound: true });
    setRandomPlace(userPlace);
    dispatch({ type: 'ADD_HISTORY', payload: newHistory });
    db.history.put({ xid: userPlace.xid });
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
              {' '}
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
