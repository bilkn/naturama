import React from 'react';
import './IconButton.scss';
function IconButton(props) {
  const { iconClass, handleBtnClick } = props;

  return (
    <button className="icon-button" onClick={handleBtnClick}>
      <i className={iconClass} />
    </button>
  );
}

export default IconButton;
