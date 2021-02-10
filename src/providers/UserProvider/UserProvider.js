import React, { useEffect, useReducer, useState } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';
import userReducer from '../../reducers/UserReducer';

function UserProvider(props) {

  
  const [state, dispatch] = useReducer(userReducer, null);

  useEffect(() => {
    if (!state) initialize(dispatch);
  }, []);
  return <UserContext.Provider value={[state, dispatch]} {...props} />;
}

export default UserProvider;
