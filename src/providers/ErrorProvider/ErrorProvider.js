import React, { useState } from 'react';

function ErrorProvider(props) {
  const defaultState = {
    message: '',
    isGeo: false,
    isDB: false,
  };
  const [error, setError] = useState(defaultState);

  return <ErrorProvider.Provider value={{ error, setError }} {...props} />;
}

export default ErrorProvider;
