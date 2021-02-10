import React from 'react';
import DBContext from '../../context/DBContext';
import db from '../../helpers/dexie';

function DBProvider(props) {
  
  return <DBContext.Provider value={db} {...props} />;
}

export default DBProvider;
