import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import IconButton from '../../components/IconButton/IconButton';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
function DailyPlaceList() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Daily List');
  }, []);
  const handleBtnClick = () => setSelectedPlace(null);
  if (!userState) {
    return <Redirect to="/" />;
  }
  return (
    <div className="daily-place-list">
      <AppHead>
        <PageName pageName="Daily List" />
      </AppHead>
      {(selectedPlace && (
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
          list={userState.dailyList}
          setSelectedPlace={setSelectedPlace}
        />
      )}
      <MobileNav />
    </div>
  );
}

export default DailyPlaceList;
