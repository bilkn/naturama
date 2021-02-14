import React from 'react';
import Avatar from '../Avatar/Avatar';
import './ProfileThumbnail.scss';

function ProfileThumbnail({ userState }) {
  return (
    <div className="profile-thumbnail">
      <Avatar userState = {userState} />
      <h2 className="profile-thumbnail__person-username">
        {(userState && userState.profile.username) || ''}
      </h2>
    </div>
  );
}

export default ProfileThumbnail;
