import React, { useState } from 'react';
import LoadingContext from '../../context/LoadingContext';

function LoadingProvider(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[isLoading, setIsLoading]} {...props} />
  );
}

export default LoadingProvider;
