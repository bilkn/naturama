import React, { useContext, useEffect, useState } from 'react';
import './FullscreenPicture.scss';
import TestImg from '../../assets/img.jpg';
import MobilePictureNavTop from '../../components/MobilePictureNavTop/MobilePictureNavTop';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import PlaceContext from '../../context/PlaceContext';
function FullscreenPicture() {
  const [picture, setPicture] = useState(null);
  const [place] = useContext(PlaceContext);
  useEffect(() => {
    setPicture();
  }, []);

  return (
    <div className="fullscreen-picture">
      <img src={TestImg} alt="" className="fullscreen-picture__img" />
      <MobilePictureNavTop />
      <PictureToolbar />
    </div>
  );
}

export default FullscreenPicture;
