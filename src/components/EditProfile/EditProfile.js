import React from 'react';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
function EditProfile() {
  return (
    <div className="edit-profile">
      <PictureInput />
      <div className="edit-profile__name-container">
        <NameInput />
        <IconButton iconclass={'fas fa-check-circle'} />
      </div>
    </div>
  );
}

export default EditProfile;
