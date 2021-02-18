import React, { useContext, useEffect, useReducer } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';
import userReducer from '../../reducers/UserReducer';
import ErrorContext from '../../context/ErrorContext';
function UserProvider(props) {
  const [userState, dispatch] = useReducer(userReducer, null);
  const errorState = useContext(ErrorContext);
  useEffect(async () => {
    if (!userState) {
      try {
        await initialize(errorState, dispatch);
      } catch (err) {
        console.log(err);
        // Add notification
      }
    }
  }, []);
  return <UserContext.Provider value={[userState, dispatch]} {...props} />;
}

export default UserProvider;
