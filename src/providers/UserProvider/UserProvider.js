import React, { useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import initialize from '../../helpers/initilalize';

function UserProvider(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) initialize(setUser);
  }, []);
  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

export default UserProvider;
