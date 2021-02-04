import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import ProfileThumbnail from "../../components/ProfileThumbnail/ProfileThumbnail";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
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
      <footer className="profile__footer">
        Code and design by Bilkan Konus
      </footer>
      <MobileNav />
    </div>
  );
}

export default Profile;
