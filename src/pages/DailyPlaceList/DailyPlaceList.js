import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import Place from '../../components/Place/Place';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router';
import Error from '../../components/Error/Error';
import db from '../../helpers/dexie';
import ErrorContext from '../../context/ErrorContext';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';
import LoadingContext from '../../context/LoadingContext';

function DailyPlaceList() {
  const [userState, dispatch] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const [, setIsLoading] = useContext(LoadingContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  if (!userState) {
    return <Redirect to="/" />;
  }

  const handlePlaceClick = async (place) => {
    setIsLoading(true);
    setSelectedPlace(place);
    const newHistory = [...userState.history, place.xid];
    const dailyList = userState.dailyList.filter(
      (dailyPlace) => dailyPlace.xid !== place.xid
    );
    dispatch({
      type: 'ADD_HISTORY_DAILY_LIST',
      payload: { history: newHistory, dailyList },
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
      {isMatched && selectedPlace && <AsidePictureToolbar />}
      {(!userState.dailyList.length && !selectedPlace && (
        <Error text="No place was found." />
      )) ||
        (selectedPlace && (
          <>
            <Place place={selectedPlace} />
          </>
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
