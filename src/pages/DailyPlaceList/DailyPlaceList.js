import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
import PlaceList from '../../components/PlaceList/PlaceList';
function DailyPlaceList() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Daily List');
  }, []);
  return (
    <div className="daily-place-list">
      {(selectedPlace && <Place place={selectedPlace} />) || (
        <PlaceList userState={userState} setSelectedPlace={setSelectedPlace} />
      )}
      <MobileNav />
    </div>
  );
}

export default DailyPlaceList;
