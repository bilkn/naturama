import React, { useState } from 'react';
import './ProfileMenu.scss';
import EditPersonUI from '../EditPersonUI/EditPersonUI';
import DarkBackground from '../DarkBackground/DarkBackground';
function ProfileMenu() {
  const [showEdit, setShowEdit] = useState(false);
  const [showDarkBackground, setShowDarkBackground] = useState(false);

  const handleEditProfile = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowEdit(!showEdit);
  };
  return (
    <div className="profile-menu">
      {showEdit && (
        <EditPersonUI
          setShowEdit={setShowEdit}
          setShowDarkBackground={setShowDarkBackground}
        />
      )}
      {showDarkBackground && (
        <DarkBackground
          showDarkBackground={showDarkBackground}
          setShowDarkBackground={setShowDarkBackground}
          setShowEdit={setShowEdit}
        />
      )}
      <ul className="profile-menu-list">
        <li className="profile-menu-list__item">
          <i className="fas fa-cog profile-menu-list__icon" />
          <a href="#" className="profile-menu-list__link">
            Preferences
          </a>
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
          <a href="#" className="profile-menu-list__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
