import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileThumbnail from '../ProfileThumbnail/ProfileThumbnail';
import './ProfileContainer.scss';

function ProfileContainer() {
  const [userState] = useContext(UserContext);
  return (
    <div className="profile-container">
      <ProfileThumbnail userState={userState} />
      <ProfileMenu />
      <footer className="profile-container__footer">
        &copy; Powered by
        <a
          href="https://opentripmap.io/product"
          className="profile-container__attribute-link"
        >
          OpenTripMap
        </a>
      </footer>
    </div>
  );
}

export default ProfileContainer;
