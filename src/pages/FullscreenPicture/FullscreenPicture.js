import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import ShareLinkList from '../../components/ShareLinkList/ShareLinkList';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import DarkBackground from '../../components/DarkBackground/DarkBackground';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import { Redirect } from 'react-router';
import useMatchMedia from '../../hooks/useMatchMedia';
import PlaceImg from '../../components/PlaceImg/PlaceImg';

function FullscreenPicture() {
  const [showShareLink, setShowShareLinks] = useState(false);
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const { isMatched } = useMatchMedia('(min-width:1024px)');

  const [place] = useContext(SelectedPlaceContext);

  if (!place || isMatched) {
    return <Redirect to="/" />;
  }

  return (
    <div className="fullscreen-picture">
      <PlaceImg place={place} />
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
