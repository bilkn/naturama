import React from 'react';
import ReturnControl from '../ReturnControl/ReturnControl';
import './MobilePictureNavTop.scss';
function MobilePictureNavTop(props) {
  const { path, place, handleReturnClick } = props;
  return (
    <div className="mobile-picture-nav-top">
     <ReturnControl path={path} handleReturnClick={handleReturnClick}/>
      <p className="mobile-picture-nav-top__name">
        {(place && place.content.name) || ''}
      </p>
      <div className="mobile-picture-nav-top__empty-div"></div>
    </div>
  );
}

export default MobilePictureNavTop;
