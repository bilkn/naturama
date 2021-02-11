import React from 'react';
import './IconButton.scss';
function IconButton(props) {
  const { iconclass } = props;

  return (
    <button className="icon-button" {...props}>
      <i className={iconclass} />
    </button>
  );
}

export default IconButton;
