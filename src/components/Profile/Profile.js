import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileThumbnail from '../ProfileThumbnail/ProfileThumbnail';
import './Profile.scss';
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
    </div>
  );
}

export default Profile;
