import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import ProfileThumbnail from '../../components/ProfileThumbnail/ProfileThumbnail';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import './Profile.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
function Profile() {
  const titleContext = useContext(TitleContext);
  const [, setTitle] = titleContext;

  useEffect(() => {
    setTitle('Profile');
  }, []);
  return (
    <div className="profile">
      <ProfileThumbnail />
      <ProfileMenu />
      <MobileNav />
    </div>
  );
}

export default Profile;
