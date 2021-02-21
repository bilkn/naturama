import React, { useState } from 'react';
import ErrorContext from '../../context/ErrorContext';

function ErrorProvider(props) {
  const defaultState = {
    isGeoActive: true,
    isDBActive: true,
    isPlaceFound: true,
  };
  const [error, setError] = useState(defaultState);

  return <ErrorContext.Provider value={[error, setError]} {...props} />;
}

export default ErrorProvider;
