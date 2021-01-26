import React from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileThumbnail from '../ProfileThumbnail/ProfileThumbnail';
import './Profile.scss';
function Profile() {
  return (
    <div className="profile">
      <ProfileThumbnail />
      <ProfileMenu />
      <footer className="profile__footer">Design and coded by Bilkan Konus</footer>
    </div>
  );
}

export default Profile;
