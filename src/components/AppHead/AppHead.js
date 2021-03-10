import React, { useContext } from 'react';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useMatchMedia from '../../hooks/useMatchMedia';
import AppHeadNav from '../AppHeadNav/AppHeadNav';
import IconButton from '../IconButton/IconButton';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import PageName from '../PageName/PageName';
import './AppHead.scss';
import { useHistory, useLocation } from 'react-router';

function AppHead() {
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const location = useLocation();
  const history = useHistory();

  const handleBtnClick = () => {
    switch (location.pathname) {
      case '/map':
      case '/fullscreen-picture':
        history.goBack();
        break;
      default:
        setSelectedPlace(null);
        break;
    }
  };


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
