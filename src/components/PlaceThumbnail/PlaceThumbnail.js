import React from 'react';
import './PlaceThumbnail.scss';
import { Link } from 'react-router-dom';
import PlaceName from '../PlaceName/PlaceName';
import useMatchMedia from '../../hooks/useMatchMedia';
import PlaceImg from '../PlaceImg/PlaceImg';

function PlaceThumbnail(props) {
  const { icon, children, place, handleClick, className } = props;
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const {
    content: { name },
  } = place;
  return (
    <div className={`place-thumbnail ${className}`} onClick={handleClick}>
      {(isMatched && (
        <div className="place-thumbnail-img-container">
          <PlaceImg place={place} />
        </div>
      )) || (
        <Link to="/fullscreen-picture" className="place-thumbnail__link">
          <PlaceImg place={place} />
        </Link>
      )}
      {!isMatched && <i className={`${icon} place-thumbnail__icon`} />}
      {children || ''}
      <PlaceName name={name} />
    </div>
  );
}

export default PlaceThumbnail;
