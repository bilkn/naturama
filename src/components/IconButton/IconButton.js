import React from 'react';
import './IconButton.scss';

function IconButton(props) {
  const { btnClass, iconClass, onClick, children, ariaLabel } = props;
  return (
    <button
      aria-label={ariaLabel}
      className={`icon-button ${btnClass || ''}`}
      onClick={onClick}
    >
      {children}
      <i className={iconClass} />
    </button>
  );
}

export default IconButton;
