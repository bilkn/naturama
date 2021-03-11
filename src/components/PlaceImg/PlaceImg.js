import React from 'react';
import './PlaceImg.scss';

function PlaceImg({ place }) {
  const img = (place.img && place.img.large.source) || place.preview;
  const width = (place.img && place.img.large.width) || 300;
  const { name } = place.content;
  return <img src={img} alt={name} className="place-img" width={width} />;
}

export default PlaceImg;
