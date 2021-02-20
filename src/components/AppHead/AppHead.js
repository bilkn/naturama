import React from 'react';
import './AppHead.scss';

function AppHead({ children }, props) {
  return (
    <header className="app-head" {...props}>
      {children}
    </header>
  );
}

export default AppHead;
