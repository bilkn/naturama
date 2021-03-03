import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import './Notification.scss';
function Notification({ duration, dispatch }) {
  const [userState] = useContext(UserContext);

  useEffect(() => {
    const timeout= setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [duration, dispatch]);

  return (
    <div className="notification">
      <p className="notification__text">{userState.notification}</p>
    </div>
  );
}

export default Notification;
