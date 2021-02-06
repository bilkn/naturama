import React from 'react';
import TitleContext from '../../context/TitleContext';

function TitleProvider(props) {
  const [title, setTitle] = React.useState('');
  return <TitleContext.Provider value={[title, setTitle]} {...props} />;
}

export default TitleProvider;
