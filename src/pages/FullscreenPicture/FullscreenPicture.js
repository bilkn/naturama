import React, { useContext, useState } from 'react';
import './FullscreenPicture.scss';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import PictureToolbar from '../../components/PictureToolbar/PictureToolbar';
import NoImg from '../../assets/no-image.png';
import ShareLinkList from '../../components/ShareLinkList/ShareLinkList';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
import DarkBackground from '../../components/DarkBackground/DarkBackground';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import EmptyDiv from '../../components/EmptyDiv/EmptyDiv';
import IconButton from '../../components/IconButton/IconButton';
import { Redirect } from 'react-router';
import Notification from '../../components/Notification/Notification';
import UserContext from '../../context/UserContext';
function FullscreenPicture({ history }) {
  const [showShareLink, setShowShareLinks] = useState(false);
  const [userState] = useContext(UserContext);
  const [showDarkBackground, setShowDarkBackground] = useContext(
    DarkBackgroundContext
  );
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [timerID, setTimerID] = useState(null);
  const place = selectedPlace;
  if (!place) {
    return <Redirect to="/" />;
  }
  const { preview } = place;
  let placeImg = (preview && preview.source) || NoImg;
  let imgHeight = (preview && preview.height) || 300;
  let imgWidth = (preview && preview.source) || 300;
  let placeName = place.name || '';

  const handleBtnClick = () => {
    history.goBack();
    setSelectedPlace(() => null);
  };

  return (
    <div className="fullscreen-picture">
      {userState.isNotificationOpen && <Notification />}
      <img
        src={placeImg}
        alt={placeName}
        width={imgWidth}
        height={imgHeight}
        className="fullscreen-picture__img"
      />
      <MobileNavTop>
        <IconButton
          iconClass="fa fa-arrow-left"
          handleBtnClick={handleBtnClick}
        />
        <p className="fullscreen-picture_name">{place && place.content.name}</p>
        <EmptyDiv />
      </MobileNavTop>
      <PictureToolbar
        place={selectedPlace}
        setShowShareLinks={setShowShareLinks}
        setShowDarkBackground={setShowDarkBackground}
        timerID={timerID}
        setTimerID={setTimerID}
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
