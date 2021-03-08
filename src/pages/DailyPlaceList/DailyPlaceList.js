import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import IconButton from '../../components/IconButton/IconButton';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import Error from '../../components/Error/Error';
import db from '../../helpers/dexie';
import ErrorContext from '../../context/ErrorContext';
import Logo from '../../components/Logo/Logo';

function DailyPlaceList() {
  const [userState, dispatch] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const handleNavClick = () => setSelectedPlace(null);
  
  if (!userState) {
    return <Redirect to="/" />;
  }

  const handlePlaceClick = async (place) => {
    setSelectedPlace(place);
    const newHistory = [...userState.history, place.xid];
    const dailyList = userState.dailyList.filter(
      (dailyPlace) => dailyPlace.xid !== place.xid
    );
    dispatch({
      type: 'ADD_HISTORY_DAILY_LIST',
      payload: { history: newHistory, shufflePlace: place, dailyList },
    });
    if (error.isDBActive) {
      try {
        await db.history.put({ xid: place.xid });
        await db.dailyList.where('xid').equals(place.xid).delete();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="daily-place-list">
      <AppHead>
        <Logo className="logo--large-screen" />
        <PageName pageName="Daily List" />
      </AppHead>

      {(!userState.dailyList.length && !selectedPlace && <Error text="No place was found." />) ||
        (selectedPlace && (
          <Place place={selectedPlace}>
            <MobileNavTop>
              <IconButton
                iconClass="fa fa-arrow-left"
                onClick={handleNavClick}
              />
            </MobileNavTop>
          </Place>
        )) || (
          <PlaceList
            list={userState.dailyList}
            setSelectedPlace={setSelectedPlace}
            onClick={handlePlaceClick}
          />
        )}
    </div>
  );
}

export default DailyPlaceList;
