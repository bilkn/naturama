import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import MobilePictureNavTop from '../../components/MobilePictureNavTop/MobilePictureNavTop';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import NoImg from '../../assets/no-image.png';
import ShareLinkList from '../../components/ShareLinkList/ShareLinkList';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import DarkBackground from '../../components/DarkBackground/DarkBackground';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
function FullscreenPicture() {
  const [showShareLink, setShowShareLinks] = useState(false);
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const place = selectedPlace;
  
  const { preview } = place;
  let placeImg = (preview && preview.source) || NoImg;
  let imgHeight = (preview && preview.height) || 300;
  let imgWidth = (preview && preview.source) || 300;
  let placeName = place.name || '';

  const handleReturnClick = () => {
    setSelectedPlace(() => null);
  };

  return (
    <div className="fullscreen-picture">
      <img
        src={placeImg}
        alt={placeName}
        width={imgWidth}
        height={imgHeight}
        className="fullscreen-picture__img"
      />
      <MobilePictureNavTop
        path={'/'}
        place={selectedPlace}
        handleReturnClick={handleReturnClick}
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
