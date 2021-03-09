import React, { useContext } from 'react';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useMatchMedia from '../../hooks/useMatchMedia';
import AppHeadNav from '../AppHeadNav/AppHeadNav';
import IconButton from '../IconButton/IconButton';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import PageName from '../PageName/PageName';
import './AppHead.scss';

function AppHead() {
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const handleBtnClick = () => {
    setSelectedPlace(null);
  };
  // !!! Add location.  const handleBtnClick = () => {
  /*     history.goBack();
  }; */
  /*    <p className="fullscreen-picture_name">{place && place.content.name}</p>; */

  return (
    <header
      className="app-head"
      style={selectedPlace ? { justifyContent: 'space-between' } : {}}
    >
      {(selectedPlace && (
        <>
          {!isMatched && (
            <IconButton iconClass="fa fa-arrow-left" onClick={handleBtnClick} />
          )}
          <PageName />
          <EmptyDiv />
        </>
      )) || <PageName />}
      <AppHeadNav />
    </header>
  );
}

export default AppHead;
