import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
function DailyPlaceList() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Daily List');
  }, []);
  return (
    // !!! Container block may be added in the future.
    <ul className="daily-place-list">
      {(selectedPlace && <Place place={selectedPlace} />) ||
        (userState &&
          userState.dailyList.map((place) => (
            <PlaceItem
              place={place}
              setSelectedPlace={setSelectedPlace}
              key={place.xid}
            >
              {/* <IconButton btnClass="icon-btn" iconClass="fas fa-star" /> */}
            </PlaceItem>
          )))}
      <MobileNav />
    </ul>
  );
}

export default DailyPlaceList;
