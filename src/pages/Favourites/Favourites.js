import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import PlaceList from '../../components/PlaceList/PlaceList';
import Notification from '../../components/Notification/Notification';
import { Redirect } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import Error from '../../components/Error/Error';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);

  useEffect(() => {
    setTitle('Favourites');
  }, []);
  const handleBtnClick = () => setSelectedPlace(null);

  if (!userState) {
    return <Redirect to="/" />;
  }

  return (
    <div className="favourites">
      <AppHead>
        <PageName pageName="Favourites" />
      </AppHead>

      {(!userState.favourites.length && (
        <Error text="Your favourite list is empty." />
      )) ||
        (selectedPlace && (
          <Place place={selectedPlace}>
            <MobileNavTop>
              <IconButton
                iconClass="fa fa-arrow-left"
                handleBtnClick={handleBtnClick}
              />
            </MobileNavTop>
          </Place>
        )) || (
          <PlaceList
            list={userState.favourites}
            setSelectedPlace={setSelectedPlace}
          />
        )}
      {userState.isNotificationOpen && <Notification />}
    </div>
  );
}

export default Favourites;
