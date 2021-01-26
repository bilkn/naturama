import React from 'react';
import PersonPicture from '../PersonPicture/PersonPicture';
import './ProfileThumbnail.scss';

function ProfileThumbnail() {
 
  return (
    <div className="profile-thumbnail">
      <PersonPicture />
      <h2 className="profile-thumbnail__person-name">JOHN MICHAEL</h2>
    </div>
  );
}

export default ProfileThumbnail;
