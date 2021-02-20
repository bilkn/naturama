import React from 'react';
import './IconButton.scss';
function IconButton(props) {
  const { btnClass, iconClass, handleBtnClick } = props;

  return (
    <button className={`icon-button ${btnClass}`} onClick={handleBtnClick}>
      <i className={iconClass} />
    </button>
  );
}

export default IconButton;
