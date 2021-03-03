function clearNotificationIfExist(userState, dispatch) {
  const { isNotificationOpen } = userState;
  isNotificationOpen && dispatch({ type: 'CLEAR_NOTIFICATION' });
}

export default clearNotificationIfExist;
