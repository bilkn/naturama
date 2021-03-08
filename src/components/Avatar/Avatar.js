import React from 'react';
import './Avatar.scss';
import NoAvatar from '../../assets/no-avatar.png';

function Avatar({url, userState }) {
  return (
    <div className="avatar-container">
      <img
        className="avatar-container__picture"
        src={url || (userState && userState.profile.picture.url) || NoAvatar}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
