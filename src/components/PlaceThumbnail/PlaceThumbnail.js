import React from 'react';
import './PlaceThumbnail.scss';
import NoImg from "../../assets/no-image.png";
function PlaceThumbnail(props) {
  const { classNames, icon, children, place } = props;
  let placeImg = NoImg;
  let imgHeight = 300;
  let imgWidth = 300;
  let placeName = null;
  if (place) {
    placeImg = place.preview ? place.preview.source : NoImg;
    imgHeight = place.preview ? place.preview.height : 300;
    imgWidth = place.preview ? place.preview.width : 300;
    placeName = place.name;
  }

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
