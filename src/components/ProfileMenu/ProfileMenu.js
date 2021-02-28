import React, { useContext, useState } from 'react';
import './ProfileMenu.scss';
import DarkBackground from '../DarkBackground/DarkBackground';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile/EditProfile';
import UserContext from '../../context/UserContext';
import db from '../../helpers/dexie';
import createUser from '../../helpers/createUser';
import initialize from '../../helpers/initilalize';
import ErrorContext from '../../context/ErrorContext';

function ProfileMenu() {
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [showEdit, setShowEdit] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [userState, dispatch] = useContext(UserContext);
  const errorState = useContext(ErrorContext);

  const handleEditProfile = () => {
    if (userState) {
      setShowDarkBackground(!showDarkBackground);
      setShowEdit(!showEdit);
    } else {
      // !!! Add notification
    }
  };

  const handleContact = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowContact(!showContact);
  };

  const handleReset = async () => {
    try {
      await db.delete();
      dispatch({ type: 'RESET_DATABASE', payload: await createUser() });
      await db.open();
      await initialize(errorState, dispatch);
      // !!! Add notif.
    } catch (err) {
      console.log(err);
      // !!! Add notif.
    }
  };

  const handleRemovePlaceHistory = async () => {
    try {
      await db.history.clear();
      dispatch({ type: 'CLEAR_HISTORY', payload: [] });
    } catch (err) {
      console.log(err);
      // !!! Add notif.
    }
  };
  return (
    <div className="profile-menu">
      {showEdit && (
        <EditProfile
          setShowEdit={setShowEdit}
          setShowDarkBackground={setShowDarkBackground}
        />
      )}
      {showContact && <Contact />}
      {showDarkBackground && (
        <DarkBackground
          setShowDarkBackground={setShowDarkBackground}
          setShowEdit={setShowEdit}
          setShowContact={setShowContact}
        />
      )}
      <ul className="profile-menu-list">
        <li className="profile-menu-list__item">
          <Link to="/preferences" className="profile-menu-list__link">
            <i className="fas fa-cog profile-menu-list__icon" />
            <span>Preferences</span>
          </Link>
        </li>
        <li className="profile-menu-list__item">
          <button
            className="profile-menu-list__btn"
            onClick={handleEditProfile}
          >
            <i className="fas fa-user-edit profile-menu-list__icon" />
            Edit Profile
          </button>
        </li>
        <li className="profile-menu-list__item">
          <Link to="/help" className="profile-menu-list__link">
            <i className="fas fa-question-circle profile-menu-list__icon" />
            Help
          </Link>
        </li>
        <li className="profile-menu-list__item no-border">
          <button
            href="#"
            className="profile-menu-list__btn"
            onClick={handleContact}
          >
            <i className="fas fa-envelope profile-menu-list__icon" />
            <span> Contact</span>
          </button>
        </li>
      </ul>
      <div className="profile-menu-reset-container">
        <button
          className="profile-menu-reset-container__btn"
          onClick={handleRemovePlaceHistory}
          style={{marginBottom:"1rem"}}
        >
          Remove Place History
        </button>
        <button
          className="profile-menu-reset-container__btn"
          onClick={handleReset}
        >
          Reset all data
        </button>
      </div>
    </div>
  );
}

export default ProfileMenu;
