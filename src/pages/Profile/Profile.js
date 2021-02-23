import React, { useContext, useEffect } from 'react';
import ProfileThumbnail from '../../components/ProfileThumbnail/ProfileThumbnail';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import './Profile.scss';
import UserContext from '../../context/UserContext';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';

function Profile() {
  const [userState] = useContext(UserContext);


  return (
    <div className="profile">
      <AppHead>
        <PageName pageName="Profile" />
      </AppHead>
      <ProfileThumbnail userState={userState} />
      <ProfileMenu />
    </div>
  );
}

export default Profile;
