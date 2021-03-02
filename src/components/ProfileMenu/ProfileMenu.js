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
import createNotificationTimeout from '../../helpers/createNotificationTimeout';
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
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState({
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
    const { notifTimeoutID } = userState;
    if (notifTimeoutID) {
      clearTimeout(notifTimeoutID);
    }
    await db.delete();
    await db.open();
    await initialize(errorState, dispatch);
    const newTimeoutID = createNotificationTimeout(dispatch, 2000);
    dispatch({
      type: 'RESET_DATABASE',
      payload: { newState: await createUser(), notifTimeoutID: newTimeoutID },
    });
  };

  const removePlaceHistory = async () => {
    const { notifTimeoutID } = userState;
    if (notifTimeoutID) {
      clearTimeout(notifTimeoutID);
    }
    await db.history.clear();
    const newTimeoutID = createNotificationTimeout(dispatch, 2000);
    dispatch({
      type: 'CLEAR_HISTORY',
      payload: { history: [], notifTimeoutID: newTimeoutID },
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
      {showContact && <Contact />}
      {showDarkBackground && (
        <DarkBackground
          setShowDarkBackground={setShowDarkBackground}
          setShowEdit={setShowEdit}
          setShowContact={setShowContact}
          setShowDialog={setShowDialog}
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
