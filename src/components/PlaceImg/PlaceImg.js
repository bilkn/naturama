import React from 'react';
import './PlaceImg.scss';
import NoImg from '../../assets/no-image.png';
function PlaceImg({place}) {
  const preview = place && place.preview;
  const placeImg = (preview && preview.source) || NoImg;
  const imgHeight = (preview && preview.height) || 300;
  const imgWidth = (preview && preview.width) || 300;
  const {
    content: { name },
  } = place;
  return (
    <img
      src={placeImg}
      alt={name}
      className="place-img"
      width={imgWidth}
      height={imgHeight}
    />
  );
}

export default PlaceImg;
