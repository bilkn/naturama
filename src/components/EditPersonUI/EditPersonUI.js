import AddPersonUIInfo from '../AddPersonUIInfo/AddPersonUIInfo';
import EditPersonUIControls from '../EditPersonUIControls/EditPersonUIControls';
import PictureInput from '../PictureInput/PictureInput';
import { useState } from 'react';
import './EditPersonUI.scss';
/* import noPicture from '../../assets/no-picture.png'; */
import PersonImgContainer from '../PersonImgContainer/PersonImgContainer';
import createFileURL from '../../helpers/createFileURL';
import React from 'react';
function EditPersonUI({ setShowEdit, setShowDarkBackground }) {
  const [currentPicture, setCurrentPicture] = useState(null);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);

  const handleAcceptClick = () => {
    setShowDarkBackground(false);
    setShowEdit(false);
  };
  return (
    <div className="edit-person-ui">
      {didUserUploadPicture ? (
        <PersonImgContainer
          createFileURL={createFileURL}
          currentPicture={currentPicture}
        />
      ) : (
        <PictureInput
          setDidUserUploadPicture={setDidUserUploadPicture}
          setCurrentPicture={setCurrentPicture}
        />
      )}

      <AddPersonUIInfo > 

      <EditPersonUIControls handleAcceptClick={handleAcceptClick} />
      </AddPersonUIInfo>
    </div>
  );
}

export default EditPersonUI;
