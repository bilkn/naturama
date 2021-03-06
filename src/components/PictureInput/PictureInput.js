import React, { useEffect } from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PictureInput.scss';
import Avatar from '../Avatar/Avatar';
import validatePictureFormat from '../../helpers/validatePictureFormat';
import clearNotificationIfExist from '../../helpers/clearNotificationIfExist';
function PictureInput(props) {
  const { picture, setPicture, userState, dispatch } = props;

  const handleChange = (e) => {
    clearNotificationIfExist(userState, dispatch);
    const file = e.target.files[0];
    validatePictureFile(file);
  };

  const validatePictureFile = (file) => {
    const fileSizeInMB = file && file.size / 1024 / 1024;

    if (file) {
      if (!validatePictureFormat(file)) {
        dispatch({ type: 'INVALID_FILE_FORMAT' });
      } else if (fileSizeInMB > 5) {
        dispatch({ type: 'INVALID_FILE_SIZE' });
      } else {
        const pictureObj = {
          file,
          url: createFileURL(file),
        };
        setPicture(pictureObj);
      }
    }
  };

  useEffect(() => {
    const { picture } = userState.profile;
    if (picture) setPicture(picture);
  }, [setPicture, userState.profile]);

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") e.target.click();
  };

  return (
    <div className="picture-input-container">
      {picture ? (
        <label
          tabIndex="0"
          htmlFor="picture"
          className="picture-input-container__label"
          onKeyUp={handleOnKeyUp}
        >
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
