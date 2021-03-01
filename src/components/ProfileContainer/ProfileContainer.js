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
    </div>
  );
}

export default ProfileContainer;
