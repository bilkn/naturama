import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router';
function DailyPlaceList() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Daily List');
  }, []);

  if (!userState) {
    return <Redirect to="/" />;
  }
  return (
    <div className="daily-place-list">
      {(selectedPlace && <Place place={selectedPlace} />) || (
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
