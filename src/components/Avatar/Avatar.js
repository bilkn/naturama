import React from 'react';
import './Avatar.scss';
import TestImg from '../../assets/girl-1.png';
function Avatar() {
  return (
    <div className="avatar-container">
      <img
        className="avatar-container__picture"
        src={TestImg}
        alt="girl"
      />
    </div>
  );
}

export default Avatar;
