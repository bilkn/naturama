import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import ProfileThumbnail from '../../components/ProfileThumbnail/ProfileThumbnail';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import './Profile.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
function Profile() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);

  useEffect(() => {
    setTitle('Profile');
  }, []);
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
