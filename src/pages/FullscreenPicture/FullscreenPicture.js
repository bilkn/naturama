import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import MobilePictureNavTop from '../../components/MobilePictureNavTop/MobilePictureNavTop';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import NoImg from '../../assets/no-image.png';
import PlaceContext from '../../context/PlaceContext';
import ShareLinkList from '../../components/ShareLinkList/ShareLinkList';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import DarkBackground from '../../components/DarkBackground/DarkBackground';
function FullscreenPicture() {
  const [showShareLink, setShowShareLinks] = useState(false);
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [place] = useContext(PlaceContext);

  // !!! Refactor this code
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
    <div className="fullscreen-picture">
      <img
        src={placeImg}
        alt={placeName}
        width={imgWidth}
        height={imgHeight}
        className="fullscreen-picture__img"
      />
      <MobilePictureNavTop place={place} />
      <PictureToolbar
        place={place}
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
