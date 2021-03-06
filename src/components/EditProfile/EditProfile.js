import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
import db from '../../helpers/dexie';
import blobToArrayBuffer from '../../helpers/blobToArrayBuffer';
import editUser from '../../helpers/editUser';
import ErrorContext from '../../context/ErrorContext';

function EditProfile(props) {
  const { setShowEdit, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [picture, setPicture] = useState(null);
  const [error] = useContext(ErrorContext);

  const addPictureToDB = async () => {
    const pictureArrayBuffer = await blobToArrayBuffer(picture.file);
    error.isDBActive &&
      (await db.profile.update(2, { picture: pictureArrayBuffer }));
  };

  const createNewUser = () => {
    let propArr = [];
    if (!picture && !username) return null;
    if (username) propArr.push(['username', username]);
    if (picture) propArr.push(['picture', picture]);
    return editUser(userState, propArr);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowEdit(false);
        setShowDarkBackground(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setShowEdit, setShowDarkBackground]);

  const handleBtnClick = async () => {
    setShowDarkBackground(false);
    setShowEdit(false);
    const newUser = createNewUser();
    if (newUser) {
      try {
        if (picture.file) addPictureToDB();
        error.isDBActive && (await db.profile.update(1, { username }));
        dispatch({ type: 'EDIT_USER', payload: newUser });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="edit-profile">
      <PictureInput
        picture={picture}
        setPicture={setPicture}
        userState={userState}
        dispatch={dispatch}
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
          onClick={handleBtnClick}
        />
      </div>
    </div>
  );
}

export default EditProfile;
