import React from 'react';
import './PlaceThumbnail.scss';
import NoImg from '../../assets/no-image.png';
import { Link } from 'react-router-dom';

function PlaceThumbnail(props) {
  // !!! This component may be reformatted in the future.
  const { classNames, icon, children, place } = props;
  let placeImg = NoImg;
  let imgHeight = 300;
  let imgWidth = 300;
  let placeName = null;
  if (place) {
    placeImg = place.preview.source || NoImg;
    imgHeight = place.preview.height || 300;
    imgWidth = place.preview.width || 300;
    placeName = place.content.name;
  }
  return (
    <div className={classNames.join(' ')}>
      <Link to="/fullscreen-picture" className={classNames.join(' ')}>
        <img
          src={placeImg}
          alt={placeName}
          className={`${classNames[0]}__img`}
          width={imgWidth}
          height={imgHeight}
        />
      </Link>
      <i className={`${icon} ${classNames[0]}__icon`}></i>
      {children || ''}
      <p className={`${classNames[0]}__name`}>{placeName}</p>
    </div>
  );
}

export default PlaceThumbnail;
