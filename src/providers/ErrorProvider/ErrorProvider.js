import React, { useState } from 'react';
import ErrorContext from '../../context/ErrorContext';

function ErrorProvider(props) {
  const defaultState = {
    isGeoActive: false,
    isDBActive: false,
  };
  const [error, setError] = useState(defaultState);

  return <ErrorContext.Provider value={[error, setError]} {...props} />;
}

export default ErrorProvider;
