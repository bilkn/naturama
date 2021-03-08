import React from 'react';
import './IconButton.scss';

function IconButton(props) {
  const { btnClass, iconClass, onClick, children } = props;
  return (
    <button className={`icon-button ${btnClass || ''}`} onClick={onClick}>
      {children}
      <i className={iconClass} />
    </button>
  );
}

export default IconButton;
