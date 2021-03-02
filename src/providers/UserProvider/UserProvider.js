import React, { useContext, useEffect, useReducer } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';
import userReducer from '../../reducers/UserReducer';
import ErrorContext from '../../context/ErrorContext';
import initUserWithoutDB from '../../helpers/initUserWithoutDB';
import db from '../../helpers/dexie';
function UserProvider(props) {
  const [userState, dispatch] = useReducer(userReducer, null);
  const errorState = useContext(ErrorContext);
  const [error, setError] = errorState;

  useEffect(() => {
    async function openDB() {
      try {
        await db.open();
      } catch (err) {
        console.log(err);
        if (error.isDBActive) setError({ ...error, isDBActive: false });
      }
    }
    openDB();
  }, [error, setError]);

  useEffect(() => {
    async function init() {
      if (!userState) {
        try {
          await initialize(errorState, dispatch);
        } catch (err) {
          console.log(err);
          await initUserWithoutDB(dispatch);
          if (error.isDBActive) setError({ ...error, isDBActive: false });
        }
      }
    }
    init();
  }, [errorState, userState, error, setError]);

  return <UserContext.Provider value={[userState, dispatch]} {...props} />;
}

export default UserProvider;
