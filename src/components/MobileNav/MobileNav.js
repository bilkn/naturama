import React, { useContext } from 'react';
import './MobileNav.scss';
import { Link } from 'react-router-dom';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import UserContext from '../../context/UserContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
function MobileNav() {
  const [, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);

  const shuffleBtnHandler = async () => {
    try {
      const place = await getRandomPlace(userState);
      const userPlace = await createPlaceForUserData(place);
      setRandomPlace(userPlace);
    } catch (err) {
      console.log(err);
      // !!! Add modal
    }
  };

  const handleClick = () => {
    setSelectedPlace(null);
  };
  return (
    <nav className="mobile-nav" onClick={handleClick}>
      <ul className="mobile-nav-list">
        <li className="mobile-nav-list-item">
          <Link to="/">
            <button className="mobile-nav-list-item__btn">
              <i className="fas fa-home mobile-nav-list-item__icon"></i>
            </button>
          </Link>
        </li>
        <li className="mobile-nav-list-item">
          <Link to="/favourites">
            <button className="mobile-nav-list-item__btn">
              <i className="fas fa-star mobile-nav-list-item__icon"></i>
            </button>
          </Link>
        </li>
        <li className="mobile-nav-list-item mobile-nav-list-item--shuffle-item">
          <button
            className="mobile-nav-list-item__btn"
            onClick={shuffleBtnHandler}
          >
            <i className="fas fa-random mobile-nav-list-item__icon"></i>
          </button>
        </li>
        <li className="mobile-nav-list-item ">
          <Link to="/profile">
            <button className="mobile-nav-list-item__btn">
              <i className="fas fa-user mobile-nav-list-item__icon"></i>
            </button>
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
