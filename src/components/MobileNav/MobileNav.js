import React, { useContext, useState } from 'react';
import './MobileNav.scss';
import { Link } from 'react-router-dom';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import UserContext from '../../context/UserContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import db from '../../helpers/dexie';
import IconButton from '../IconButton/IconButton';
function MobileNav() {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [canUserRequest, setCanUserRequest] = useState(true);

  const handleShuffleClick = async () => {
    if (canUserRequest) {
      setRandomPlace(null);
      setCanUserRequest(() => false);
      const timeout = setTimeout(() => {
        setCanUserRequest(() => true);
        clearTimeout(timeout);
      }, 2000);
      try {
        const place = await getRandomPlace(userState);
        const userPlace = await createPlaceForUserData(place);
        const newHistory = [...userState.history, userPlace.xid];
        setRandomPlace(userPlace);
        dispatch({ type: 'ADD_HISTORY', payload: newHistory });
        db.history.put({ xid: userPlace.xid });
      } catch (err) {
        console.log(err);
        // !!! Add modal
      }
    } else {
      console.log('You can fetch after 2 sec.');
      // !!! Add notif.
    }
  };

  const handleNavClick = () => {
    setSelectedPlace(null);
  };
  return (
    <nav className="mobile-nav" onClick={handleNavClick}>
      <ul className="mobile-nav-list">
        <li className="mobile-nav-list-item">
          <Link to="/">
            <IconButton
              btnClass="mobile-nav-list-item__btn"
              iconClass="fas fa-home mobile-nav-list-item__icon"
            />
          </Link>
        </li>
        <li className="mobile-nav-list-item">
          <Link to="/favourites">
            <IconButton
              btnClass="mobile-nav-list-item__btn"
              iconClass="fas fa-star mobile-nav-list-item__icon"
            />
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
          <Link to="/profile">
            <IconButton
              btnClass="mobile-nav-list-item__btn"
              iconClass="fas fa-user  mobile-nav-list-item__icon"
            />
          </Link>
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/daily-place-list">
            <button className="mobile-nav-list-item__btn">
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
              <i className="fas fa-list-alt mobile-nav-list-item__icon"></i>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
