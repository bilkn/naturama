import React from 'react';
import './PictureInput.scss';
function PictureInput() {
  return (
    <div className="picture-input-container">
      <label htmlFor="picture" className="picture-input-container__label">
        <i
          className="fas fa-camera picture-input-container__icon"
          aria-hidden={true}
        ></i>
      </label>
      <input
        id="picture"
        type="file"
        className="picture-input-container__picture"
        accept="image/png, image/jpeg"
        /*  onChange={fileInputHandler} */
        hidden={true}
      ></input>
    </div>
  );
}

export default PictureInput;
