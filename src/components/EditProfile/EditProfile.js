import React from 'react';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import "./EditProfile.scss"
function EditProfile() {
  return <div className="edit-profile">
      <PictureInput />
      <NameInput />
  </div>;
}

export default EditProfile;
