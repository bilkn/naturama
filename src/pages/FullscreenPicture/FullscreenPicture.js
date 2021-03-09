import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import NoImg from '../../assets/no-image.png';
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
  const { preview } = place;
  let placeImg = (preview && preview.source) || NoImg;
  let imgHeight = (preview && preview.height) || 300;
  let imgWidth = (preview && preview.source) || 300;
  let placeName = place.name || '';

  

  return (
    <div className="fullscreen-picture">
      <img
        src={placeImg}
        alt={placeName}
        width={imgWidth}
        height={imgHeight}
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
