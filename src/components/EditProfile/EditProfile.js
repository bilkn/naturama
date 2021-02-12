import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import createNewUser from '../../helpers/createNewUser';
import IconButton from '../IconButton/IconButton';
import NameInput from '../NameInput/NameInput';
import PictureInput from '../PictureInput/PictureInput';
import './EditProfile.scss';
function EditProfile(props) {
  const { setShowEdit, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const [username, setUsername] = useState(userState.profile.username || '');
  const handleBtnClick = () => {
    setShowDarkBackground(false);
    setShowEdit(false);
    const newUser = createNewUser(userState, [['username', username]]);
    dispatch({ type: 'EDIT_USER', payload: newUser });
  };
  return (
    <div className="edit-profile">
      <PictureInput />
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
