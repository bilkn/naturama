import React from 'react';
import './ProfileMenu.scss';
function ProfileMenu() {
  return (
    <div className="profile-menu">
      <ul className="profile-menu-list">
        <li className="profile-menu-list__item">
          <i className="fas fa-cog profile-menu-list__icon" />
          <a href="#" className="profile-menu-list__link">
            Preferences
          </a>
        </li>
        <li className="profile-menu-list__item">
          <i className="fas fa-user-edit profile-menu-list__icon" />
          <a href="#" className="profile-menu-list__link">
            Edit Profile
          </a>
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
