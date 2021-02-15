import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import UserContext from '../../context/UserContext';
function DailyPlaceList() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  useEffect(() => {
    setTitle('Daily List');
  }, []);
  return (
    // !!! Container block may be added in the future.
    <ul className="daily-place-list">
      {userState &&
        userState.dailyList.map((place) => (
          <PlaceItem place={place} key={place.xid} />
        ))}

      <MobileNav />
    </ul>
  );
}

export default DailyPlaceList;
