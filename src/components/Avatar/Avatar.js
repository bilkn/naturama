import React from 'react';
import './Avatar.scss';
import NoAvatar from '../../assets/no-avatar.png';
function Avatar({ userState }) {
  return (
    <div className="avatar-container">
      <img
        className="avatar-container__picture"
        src={userState && userState.profile.picture.url || NoAvatar}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
