import React from 'react';
import './PlaceThumbnail.scss';
function PlaceThumbnail(props) {
  const { classNames, icon, children, place } = props;
  let placeImg = null;
  let imgHeight = null;
  let imgWidth = null;
  let placeName = null;
  if (place) {
    placeImg = place.preview.source;
    imgHeight = place.preview.height;
    imgWidth = place.preview.width;
    placeName = place.name;
  }
  console.log(place);
  return (
    <div className={classNames.join(' ')}>
      <img
        src={placeImg}
        alt={placeName}
        className={`${classNames[0]}__img`}
        width={imgWidth}
        height={imgHeight}
      />
      <i className={`${icon} ${classNames[0]}__icon`}></i>
      {children || ''}
      <p className={`${classNames[0]}__name`}>{placeName}</p>
    </div>
  );
}

export default PlaceThumbnail;
