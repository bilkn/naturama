import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import Error from '../../components/Error/Error';
import Logo from '../../components/Logo/Logo';

function Favourites() {
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);

  const handleBtnClick = () => setSelectedPlace(null);

  if (!userState) {
    return <Redirect to="/" />;
  }

  return (
    <div className="favourites">
      <AppHead>
        <Logo className={'logo--large-screen'} />
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
                onClick={handleBtnClick}
              />
            </MobileNavTop>
          </Place>
        )) || (
          <PlaceList
            list={userState.favourites}
            setSelectedPlace={setSelectedPlace}
          />
        )}
    </div>
  );
}

export default Favourites;
