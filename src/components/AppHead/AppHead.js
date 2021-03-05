import React from 'react';
import AppHeadNav from '../AppHeadNav/AppHeadNav';
import './AppHead.scss';

function AppHead({ children, ...props }) {
  return (
    <header className={`app-head`} {...props}>
      {children}
      <AppHeadNav />
    </header>
  );
}

export default AppHead;
