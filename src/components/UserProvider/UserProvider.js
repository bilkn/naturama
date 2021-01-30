import React from 'react';
import UserContext from '../../context/UserContext';

function UserProvider(props) {
  const initialUserState = {
    preferences: {},
    favourites: [],
    location: {
      lat: '',
      lon: '',
    },
  };
  const [user, setUser] = React.useState(initialUserState);
  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

export default UserProvider;
