import React from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PictureInput.scss';
import Avatar from '../Avatar/Avatar';
function PictureInput({ picture, setPicture }) {

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const pictureObj = {
        file: file,
        url: createFileURL(file),
      };
      setPicture(pictureObj);
    }
  };

  return (
    <div className="picture-input-container">
      {picture ? (
        <label htmlFor="picture" className="picture-input-container__label">
          <Avatar url={picture ? picture.url : ""} />
        </label>
      ) : (
        <label htmlFor="picture" className="picture-input-container__label">
          <i
            className="fas fa-camera picture-input-container__icon"
            aria-hidden={true}
          ></i>
        </label>
      )}

      <input
        id="picture"
        type="file"
        className="picture-input-container__picture"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        hidden={true}
      />
    </div>
  );
}

export default PictureInput;
