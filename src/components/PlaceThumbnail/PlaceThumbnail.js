import React from 'react';
import './PlaceThumbnail.scss';
import NoImg from '../../assets/no-image.png';
import { Link } from 'react-router-dom';
import PlaceName from '../PlaceName/PlaceName';
import useMatchMedia from '../../hooks/useMatchMedia';

function PlaceThumbnail(props) {
  const { icon, children, place } = props;
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const preview = place && place.preview;
  const placeImg = (preview && preview.source) || NoImg;
  const imgHeight = (preview && preview.height) || 300;
  const imgWidth = (preview && preview.width) || 300;
  const {
    content: { name },
  } = place;

  return (
    <div className="place-thumbnail">
      <Link
        to="/fullscreen-picture"
        className="place-thumbnail__link"
      >
        <img
          src={placeImg}
          alt={name}
          className="place-thumbnail__img"
          width={imgWidth}
          height={imgHeight}
        />
      </Link>
      <i className={`${icon} place-thumbnail__icon`}></i>
      {children || ''}
      <PlaceName name={name} />
    </div>
  );
}

export default PlaceThumbnail;
