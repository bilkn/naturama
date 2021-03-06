import React from 'react';
import UserRequestContext from '../../context/UserRequestContext';

function UserRequestProvider(props) {
  const [canUserRequest, setCanUserRequest] = React.useState(true);
  return (
    <UserRequestContext.Provider
      value={[canUserRequest, setCanUserRequest]}
      {...props}
    />
  );
}

export default UserRequestProvider;
