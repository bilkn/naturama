import React from 'react';
import './PlaceImg.scss';

function PlaceImg({ place }) {
  const largeImg = place.img?.large?.source || place.preview;
  const mediumImg = place.img?.medium?.source || place.preview;
  const smallImg = place.img?.small?.source || place.preview;
  const width = place.img?.large?.width || 300;
  // !!! Could be refactored in the future.
  const { name } = place.content;
  return (
    <img
      src={smallImg}
      srcSet={`${smallImg} 250w,${mediumImg} 500w, ${largeImg} 1000w`}
      alt={name}
      className="place-img"
    />
  );
}

export default PlaceImg;
