import React, { useContext, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
function EditProfile(props) {
  const { setShowEdit, setShowDarkBackground } = props;
  const [name, setName] = useState('');

  const handleBtnClick = () => {
    setShowDarkBackground(false);
    setShowEdit(false);
  };
  return (
    <div className="edit-profile">
      <PictureInput />
      <div className="edit-profile__name-container">
        <NameInput name={name} setName={setName} />
        <IconButton
          handleBtnClick={handleBtnClick}
          iconClass={'fas fa-check-circle'}
        />
      </div>
    </div>
  );
}

export default EditProfile;
