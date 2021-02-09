import React, { useEffect } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';

function UserProvider(props) {
  const [user, setUser] = React.useState(null);
  useEffect(()=> {
    if(!user) initialize(setUser);
  }, [])
  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

export default UserProvider;
