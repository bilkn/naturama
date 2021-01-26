import React from 'react';
import './PersonPicture.scss';
import TestImg from '../../assets/girl-1.png';
function PersonPicture() {
  return (
    <div className="person-picture-container">
      <img
        className="person-picture-container__picture"
        src={TestImg}
        alt="girl"
      />
    </div>
  );
}

export default PersonPicture;
