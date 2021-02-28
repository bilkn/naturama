import React, { useContext, useState } from 'react';
import './ProfileMenu.scss';
import DarkBackground from '../DarkBackground/DarkBackground';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile/EditProfile';
import UserContext from '../../context/UserContext';
import db from '../../helpers/dexie';
import createUser from '../../helpers/createUser';
import initialize from '../../helpers/initilalize';
import ErrorContext from '../../context/ErrorContext';
import Dialog from '../Dialog/Dialog';

function ProfileMenu() {
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [showEdit, setShowEdit] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [userState, dispatch] = useContext(UserContext);
  const errorState = useContext(ErrorContext);
  const [dialog, setDialog] = useState({
    isDialogOpen: false,
    text: '',
    operation: '',
  });
  const handleEditProfile = () => {
    if (userState) {
      setShowDarkBackground(!showDarkBackground);
      setShowEdit(!showEdit);
    } else {
      // !!! Add notification
    }
  };

  const handleContact = () => {
    setShowDarkBackground(!showDarkBackground);
    setShowContact(!showContact);
  };

  const resetAllData = async () => {
    await db.delete();
    dispatch({ type: 'RESET_DATABASE', payload: await createUser() });
    await db.open();
    await initialize(errorState, dispatch);
  };

  const removePlaceHistory = async () => {
    await db.history.clear();
    dispatch({ type: 'CLEAR_HISTORY', payload: [] });
  };

  const handleDialog = (e) => {
    const operation = e.target.dataset.op;

    console.log(operation);
    switch (operation) {
      case 'clear':
        setDialog({
          isDialogOpen: true,
          text: 'Are you really want to clear your history?',
          operation,
        });
        break;
      case 'reset':
        setDialog({
          isDialogOpen: true,
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
            // Add notif.
          }
          break;
        case 'reset':
          {
            await resetAllData();
            // Add notif.
          }
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
    setDialog({
      isDialogOpen: false,
      text: '',
      operation: '',
    });
  };

  return (
    <div className="profile-menu">
      {dialog.isDialogOpen && (
        <Dialog
          text={dialog.text}
          operationHandler={operationHandler}
          setDialog={setDialog}
        />
      )}

      {showEdit && (
        <EditProfile
          setShowEdit={setShowEdit}
          setShowDarkBackground={setShowDarkBackground}
        />
      )}
      {showContact && <Contact />}
      {showDarkBackground && (
        <DarkBackground
          setShowDarkBackground={setShowDarkBackground}
          setShowEdit={setShowEdit}
          setShowContact={setShowContact}
        />
      )}
      <ul className="profile-menu-list">
        <li className="profile-menu-list__item">
          <Link to="/preferences" className="profile-menu-list__link">
            <i className="fas fa-cog profile-menu-list__icon" />
            <span>Preferences</span>
          </Link>
        </li>
        <li className="profile-menu-list__item">
          <button
            className="profile-menu-list__btn"
            onClick={handleEditProfile}
          >
            <i className="fas fa-user-edit profile-menu-list__icon" />
            Edit Profile
          </button>
        </li>
        <li className="profile-menu-list__item">
          <Link to="/help" className="profile-menu-list__link">
            <i className="fas fa-question-circle profile-menu-list__icon" />
            Help
          </Link>
        </li>
        <li className="profile-menu-list__item no-border">
          <button
            href="#"
            className="profile-menu-list__btn"
            onClick={handleContact}
          >
            <i className="fas fa-envelope profile-menu-list__icon" />
            <span> Contact</span>
          </button>
        </li>
      </ul>
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
    </div>
  );
}

export default ProfileMenu;
