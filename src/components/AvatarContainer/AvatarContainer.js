import './Avatar.scss';
import React from 'react';
function Avatar({ createFileURL, currentPicture, nameContainer }) {
  return (
    <div className="avatar-container">
      <img
        className="avatar-container__img"
        src={createFileURL(currentPicture)}
        alt={nameContainer.current.value}
      />
    </div>
  );
}

export default Avatar;
