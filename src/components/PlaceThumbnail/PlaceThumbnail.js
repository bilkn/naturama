import React from 'react';
import './PlaceThumbnail.scss';
import NoImg from '../../assets/no-image.png';
import { Link } from 'react-router-dom';

function PlaceThumbnail(props) {
  const { classNames, icon, children, place } = props;
  const preview = place && place.preview;
  const placeImg = (preview && preview.source) || NoImg;
  const imgHeight = (preview && preview.height) || 300;
  const imgWidth = (preview && preview.width) || 300;
  const placeName = place.content.name;

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
