function createNotificationTimeout(dispatch, duration) {
  const newTimeoutID = setTimeout(() => {
    dispatch({ type: 'CLEAR_NOTIFICATION' });
    clearTimeout(newTimeoutID);
  }, duration);
  return newTimeoutID;
}

export default createNotificationTimeout;
