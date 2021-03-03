import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Notification from '../Notification/Notification';

function NotificationContainer() {
  const [userState, dispatch] = useContext(UserContext);
  return (
    <>
      {userState && userState.isNotificationOpen && (
        <Notification duration={3000} dispatch={dispatch} />
      )}
    </>
  );
}

export default NotificationContainer;
