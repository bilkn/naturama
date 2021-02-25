import React, { useContext} from 'react';
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
function DailyPlaceList() {
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);

  const handleBtnClick = () => setSelectedPlace(null);
  if (!userState) {
    return <Redirect to="/" />;
  }
 
  return (
    <div className="daily-place-list">
      <AppHead>
        <PageName pageName="Daily List" />
      </AppHead>

      {(!userState.dailyList.length && (
        <Error text="No place was found." />
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
            list={userState.dailyList}
            setSelectedPlace={setSelectedPlace}
          />
        )}
    </div>
  );
}

export default DailyPlaceList;
