import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import modifyUser from '../../helpers/modifyUser';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
import db from '../../helpers/dexie';
import blobToArrayBuffer from '../../helpers/blobToArrayBuffer';
function EditProfile(props) {
  const { setShowEdit, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [picture, setPicture] = useState(null);

  /* userState.profile.picture.url */
  const handleBtnClick = async () => {
    setShowDarkBackground(false);
    setShowEdit(false);
    const newUser = createNewUser();
    if (newUser) {
      try {
        if (picture.file) addPictureToDB();
        await db.profile.update(1, { username });
        dispatch({ type: 'EDIT_USER', payload: newUser });
      } catch (err) {
        console.log(err);
        // Add notify.
      }
    }
  };

  const addPictureToDB = async () => {
    const pictureArrayBuffer = await blobToArrayBuffer(picture.file);
    await db.profile.update(2, { picture: pictureArrayBuffer });
  };

  const createNewUser = () => {
    let propArr = [];
    if (!picture && !username) return null;
    if (username) propArr.push(['username', username]);
    if (picture) propArr.push(['picture', picture]);
    return modifyUser(userState, propArr);
  };

  return (
    <div className="edit-profile">
  
      <PictureInput
        picture={picture}
        setPicture={setPicture}
        userState={userState}
      />
      <div className="edit-profile-name-container">
        <NameInput
          username={username}
          setUsername={setUsername}
          userState={userState}
        />
        <IconButton
          btnClass="edit-profile-name-container__btn"
          iconClass="fas fa-check-circle"
          handleBtnClick={handleBtnClick}
        />
      </div>
    </div>
  );
}

export default EditProfile;
