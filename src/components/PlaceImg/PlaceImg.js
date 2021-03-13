import React from 'react';
import './PlaceImg.scss';
import NoImg from '../../assets/no-img.svg';

const NoImgStyle = { height: '150px', width: '150px' };
function PlaceImg({ place }) {
  console.log(place)
  const { small="", medium="", large="" } = place.img || {};

  // !!! Could be refactored in the future.
  const { name } = place.content;
  const img = place.preview;
  return (
    <img
      src={place.img ? small.source : NoImg}
      srcSet={
        place.img &&
        `${small.source} 250w,${medium.source} 500w, ${large.source} 1000w`
      }
      alt={name}
      className="place-img"
      style={place.img ? {} : NoImgStyle}
    />
  );
}

export default PlaceImg;
