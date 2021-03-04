import React from 'react';
import './PlaceThumbnail.scss';
import NoImg from '../../assets/no-image.png';
import { Link } from 'react-router-dom';

function PlaceThumbnail(props) {
  const { icon, children, place } = props;
  const preview = place && place.preview;
  const placeImg = (preview && preview.source) || NoImg;
  const imgHeight = (preview && preview.height) || 300;
  const imgWidth = (preview && preview.width) || 300;
  const placeName = place.content.name;

  return (
    <div className="place-thumbnail">
      <Link to="/fullscreen-picture" className="place-thumbnail__link">
        <img
          src={placeImg}
          alt={placeName}
          className="place-thumbnail__img"
          width={imgWidth}
          height={imgHeight}
        />
      </Link>
      <i className={`${icon} place-thumbnail__icon`}></i>
      {children || ''}
      <p className="place-thumbnail__name">{placeName}</p>
    </div>
  );
}

export default PlaceThumbnail;
