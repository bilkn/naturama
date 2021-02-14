import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import ProfileThumbnail from '../../components/ProfileThumbnail/ProfileThumbnail';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import './Profile.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
function Profile() {
  const titleContext = useContext(TitleContext);
  const [, setTitle] = titleContext;
  const [userState] = useContext(UserContext);
  useEffect(() => {
    setTitle('Profile');
  }, []);
  return (
    <div className="profile">
      <ProfileThumbnail userState={userState}/>
      <ProfileMenu />
      <MobileNav />
    </div>
  );
}

export default Profile;
