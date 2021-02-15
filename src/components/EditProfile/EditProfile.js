import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import createNewUser from '../../helpers/createNewUser';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
import db from '../../helpers/dexie';
import blobToArrayBuffer from '../../helpers/blobToArrayBuffer';
function EditProfile(props) {
  const { setShowEdit, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const [username, setUsername] = useState(userState.profile.username || '');
  const [picture, setPicture] = useState(userState.profile.picture.url);
  const handleBtnClick = async () => {
    setShowDarkBackground(false);
    setShowEdit(false);

    const newUser = createNewUser(userState, [
      ['username', username],
      ['picture', picture],
    ]);
    try {
      if (picture) addPictureToDB();
      await db.profile.update(1, { username: username });
      dispatch({ type: 'EDIT_USER', payload: newUser });
    } catch (err) {
      console.log(err);
      // Add notify.
    }
  };

  const addPictureToDB = async () => {
    try {
      const pictureArrayBuffer = await blobToArrayBuffer(picture.file);
      await db.profile.update(2, { picture: pictureArrayBuffer });
    } catch (err) {
      console.log(err);
      // Add notification
    }
  };

  return (
    <div className="edit-profile">
      <PictureInput picture={picture} setPicture={setPicture} />
      <div className="edit-profile__name-container">
        <NameInput username={username} setUsername={setUsername} />
        <IconButton
          handleBtnClick={handleBtnClick}
          iconClass={'fas fa-check-circle'}
        />
      </div>
    </div>
  );
}

export default EditProfile;
