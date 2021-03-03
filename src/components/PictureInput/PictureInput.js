import React, { useEffect } from 'react';
import createFileURL from '../../helpers/createFileURL';
import './PictureInput.scss';
import Avatar from '../Avatar/Avatar';
import validatePictureFormat from '../../helpers/validatePictureFormat';
import createNotificationTimeout from '../../helpers/createNotificationTimeout';
function PictureInput(props) {
  const { picture, setPicture, userState, dispatch } = props;

  const handleChange = (e) => {
    const { notifTimeoutID } = userState;
    notifTimeoutID && clearTimeout(notifTimeoutID);
    const file = e.target.files[0];
    validatePictureFile(file);
  };

  const validatePictureFile = (file) => {
    const fileSizeInMB = file && file.size / 1024 / 1024;

    if (file) {
      if (!validatePictureFormat(file)) {
        const newTimeoutID = createNotificationTimeout(dispatch, 3000);
        dispatch({ type: 'INVALID_FILE_FORMAT', payload: newTimeoutID });
      } else if (fileSizeInMB > 5) {
        const newTimeoutID = createNotificationTimeout(dispatch, 3000);
        dispatch({ type: 'INVALID_FILE_SIZE', payload: newTimeoutID });
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
