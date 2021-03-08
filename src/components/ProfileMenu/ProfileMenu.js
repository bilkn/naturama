import React, { useContext, useState } from 'react';
import './ProfileMenu.scss';
import DarkBackground from '../DarkBackground/DarkBackground';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import Contact from '../Contact/Contact';
import EditProfile from '../EditProfile/EditProfile';
import UserContext from '../../context/UserContext';
import db from '../../helpers/dexie';
import createUser from '../../helpers/createUser';
import initialize from '../../helpers/initilalize';
import ErrorContext from '../../context/ErrorContext';
import Dialog from '../Dialog/Dialog';
import ProfileMenuList from '../ProfileMenuList/ProfileMenuList';
import clearNotificationIfExist from '../../helpers/clearNotificationIfExist';

function ProfileMenu() {
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [showEdit, setShowEdit] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [userState, dispatch] = useContext(UserContext);
  const errorState = useContext(ErrorContext);
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState({
    text: '',
    operation: '',
  });

  const handleEditProfile = () => {
    if (userState) {
      setShowDarkBackground(!showDarkBackground);
      setShowEdit(!showEdit);
    }
  };

  const handleContact = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowContact(!showContact);
  };

  const resetAllData = async () => {
    
    clearNotificationIfExist(userState, dispatch);
    await db.delete();
    await db.open();
    await initialize(errorState, dispatch);
    dispatch({
      type: 'RESET_DATABASE',
      payload: await createUser(),
    });
  };

  const removePlaceHistory = async () => {

    clearNotificationIfExist(userState, dispatch);
    await db.history.clear();
    dispatch({
      type: 'CLEAR_HISTORY',
      payload: [],
    });
  };

  const handleDialog = (e) => {
    setShowDarkBackground(!showDarkBackground);
    setShowDialog(!showDialog);
    const operation = e.target.dataset.op;
    switch (operation) {
      case 'clear':
        setDialog({
          text: 'Are you really want to clear your history?',
          operation,
        });
        break;
      case 'reset':
        setDialog({
          text: 'Are you really want to reset all of your data?',
          operation,
        });
        break;
      default:
        break;
    }
  };

  const operationHandler = async () => {
    try {
      switch (dialog.operation) {
        case 'clear':
          {
            await removePlaceHistory();
          }
          break;
        case 'reset':
          {
            await resetAllData();
          }
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
    setDialog({
      text: '',
      operation: '',
    });
  };

  return (
    <div className="profile-menu">
      {showDialog && (
        <Dialog
          text={dialog.text}
          operationHandler={operationHandler}
          setDialog={setDialog}
          setShowDarkBackground={setShowDarkBackground}
          setShowDialog={setShowDialog}
        />
      )}

      {showEdit && (
        <EditProfile
          setShowEdit={setShowEdit}
          setShowDarkBackground={setShowDarkBackground}
        />
      )}
      {showContact && (
        <Contact
          setShowContact={setShowContact}
        />
      )}
      {showDarkBackground && (
        <DarkBackground
          setShowDarkBackground={setShowDarkBackground}
          setShowEdit={setShowEdit}
          setShowContact={setShowContact}
          setShowDialog={setShowDialog}
        />
      )}
      <ProfileMenuList
        handleEditProfile={handleEditProfile}
        handleContact={handleContact}
      />
      <div className="profile-menu-reset-container">
        <button
          className="profile-menu-reset-container__btn"
          onClick={handleDialog}
          style={{ marginBottom: '1rem' }}
          data-op="clear"
        >
          Clear place history
        </button>
        <button
          className="profile-menu-reset-container__btn"
          onClick={handleDialog}
          data-op="reset"
        >
          Reset all data
        </button>
      </div>
      <footer className="profile-menu__footer">
        &copy; Powered by
        <a
          href="https://opentripmap.io/product"
          className="profile-menu__attribute-link"
        >
          {' '}
          OpenTripMap
        </a>
      </footer>
    </div>
  );
}

export default ProfileMenu;
