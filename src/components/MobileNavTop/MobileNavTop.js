import React from 'react';
import './MobileNavTop.scss';
function MobileNavTop({ children }) {
  console.log(children)
  return <nav className="mobile-nav-top">{children}</nav>;
}

export default MobileNavTop;
