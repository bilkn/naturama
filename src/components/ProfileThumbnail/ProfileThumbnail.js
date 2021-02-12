import React from 'react';
import Avatar from '../Avatar/Avatar';
import './ProfileThumbnail.scss';

function ProfileThumbnail() {
  return (
    <div className="profile-thumbnail">
      <Avatar />
      <h2 className="profile-thumbnail__person-name">JOHN MICHAEL</h2>
    </div>
  );
}

export default ProfileThumbnail;
