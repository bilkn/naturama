import React from 'react';
import './FullscreenPicture.scss';
import TestImg from '../../assets/img.jpg';
import MobilePictureNavTop from '../MobilePictureNavTop/MobilePictureNavTop';
import MobilePictureNavBottom from '../MobilePictureNavBottom/MobilePictureNavBottom';
function FullscreenPicture() {
  return (
    <div className="fullscreen-picture">
      <img src={TestImg} alt="" className="fullscreen-picture__img" />
      <MobilePictureNavTop />
      <MobilePictureNavBottom />
    </div>
  );
}

export default FullscreenPicture;
