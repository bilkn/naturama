import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import './Notification.scss';
function Notification() {
  const [userState] = useContext(UserContext);

  return (
    <div className="notification">
      <p className="notification__text">{userState.notification}</p>
    </div>
  );
}

export default Notification;
