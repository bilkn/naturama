import React, { useEffect, useReducer } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';
import userReducer from '../../reducers/UserReducer';

function UserProvider(props) {
  const [userState, dispatch] = useReducer(userReducer, null);

  useEffect(async() => {
    if (!userState) {
      try {
        await initialize(dispatch);
      } catch (err) {
        console.log(err);
        // Add notification
      }
    }
  }, []);
  return <UserContext.Provider value={[userState, dispatch]} {...props} />;
}

export default UserProvider;
