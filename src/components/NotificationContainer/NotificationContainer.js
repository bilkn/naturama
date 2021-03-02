import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Notification from '../Notification/Notification';

function NotificationContainer() {
  const [userState] = useContext(UserContext);
  return <>{userState && userState.isNotificationOpen && <Notification />}</>;
}

export default NotificationContainer;
