import React, { useEffect } from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PictureInput.scss';
import Avatar from '../Avatar/Avatar';
import validatePicture from '../../helpers/validatePicture';
function PictureInput({ picture, setPicture, userState }) {
  useEffect(() => {
    const { picture } = userState.profile;
    if (picture) setPicture(picture);
  }, []);
  // !!! Add picture validation.
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && validatePicture(file)) {
      const pictureObj = {
        file,
        url: createFileURL(file),
      };
      setPicture(pictureObj);
    } else {
      console.log('please provide jpeg or png');
      // Add notify.
    }
  };

  return (
    <div className="picture-input-container">
      {picture ? (
        <label htmlFor="picture" className="picture-input-container__label">
          <Avatar url={picture ? picture.url : ''} />
        </label>
      ) : (
        <label htmlFor="picture" className="picture-input-container__label">
          <i
            className="fas fa-camera picture-input-container__icon"
            aria-hidden
          ></i>
        </label>
      )}

      <input
        id="picture"
        type="file"
        className="picture-input-container__picture"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        hidden
      />
    </div>
  );
}

export default PictureInput;
