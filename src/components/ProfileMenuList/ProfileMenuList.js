import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileMenuList.scss';

function ProfileMenuList(props) {
  const { handleEditProfile, handleContact } = props;
  return (
    <ul className="profile-menu-list">
      <li className="profile-menu-list__item">
        <Link to="/preferences" className="profile-menu-list__link">
          <i className="fas fa-cog profile-menu-list__icon" />
          <span>Preferences</span>
        </Link>
      </li>
      <li className="profile-menu-list__item">
        <button className="profile-menu-list__btn" onClick={handleEditProfile}>
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
        <button className="profile-menu-list__btn" onClick={handleContact}>
          <i className="fas fa-envelope profile-menu-list__icon" />
          <span>Contact</span>
        </button>
      </li>
    </ul>
  );
}

export default ProfileMenuList;
