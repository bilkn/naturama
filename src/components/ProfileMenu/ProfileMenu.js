import React, { useContext, useState } from 'react';
import './ProfileMenu.scss';
import EditPersonUI from '../EditPersonUI/EditPersonUI';
import DarkBackground from '../DarkBackground/DarkBackground';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import Contact from '../Contact/Contact';
import Preferences from '../Preferences/Preferences';
import { Link } from 'react-router-dom';
function ProfileMenu() {
  const darkBackgroundContext = useContext(DarkBackgroundContext);
  const [showDarkBackground, setShowDarkBackground] = darkBackgroundContext;
  const [showEdit, setShowEdit] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleEditProfile = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowEdit(!showEdit);
  };
  const handleContact = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowContact(!showContact);
  };
  return (
    <div className="profile-menu">
      {showEdit && (
        <EditPersonUI
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
          <i className="fas fa-cog profile-menu-list__icon" />
          <Link to="/preferences" className="profile-menu-list__link">
            Preferences
          </Link>
        </li>
        <li className="profile-menu-list__item">
          <i className="fas fa-user-edit profile-menu-list__icon" />
          <button
            className="profile-menu-list__btn"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </li>
        <li className="profile-menu-list__item">
          <i className="fas fa-question-circle profile-menu-list__icon" />
          <a href="#" className="profile-menu-list__link">
            Help
          </a>
        </li>
        <li className="profile-menu-list__item no-border">
          <i className="fas fa-envelope profile-menu-list__icon" />
          <button
            href="#"
            className="profile-menu-list__btn"
            onClick={handleContact}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
