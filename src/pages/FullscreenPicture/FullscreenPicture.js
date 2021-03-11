import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import ShareLinkList from '../../components/ShareLinkList/ShareLinkList';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import DarkBackground from '../../components/DarkBackground/DarkBackground';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import { Redirect } from 'react-router';

function FullscreenPicture() {
  const [showShareLink, setShowShareLinks] = useState(false);
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );

  const [selectedPlace] = useContext(SelectedPlaceContext);
  const place = selectedPlace;
  if (!place) {
    return <Redirect to="/" />;
  }


  const img = (place.img && place.img.large.source) || place.preview;
  const width = (place.img && place.img.large.width) || 300;
  const { name } = place.content;

  return (
    <div className="fullscreen-picture">
      <img
        src={img}
        alt={name}
        width={width}
        className="fullscreen-picture__img"
      />
      <PictureToolbar
        place={selectedPlace}
        setShowShareLinks={setShowShareLinks}
        setShowDarkBackground={setShowDarkBackground}
      />
      {showShareLink && <ShareLinkList />}
      {showDarkBackground && (
        <DarkBackground
          setShowShareLinks={setShowShareLinks}
          setShowDarkBackground={setShowDarkBackground}
        />
      )}
    </div>
  );
}

export default FullscreenPicture;
