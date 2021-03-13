import React, { useContext } from 'react';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useMatchMedia from '../../hooks/useMatchMedia';
import AppHeadNav from '../AppHeadNav/AppHeadNav';
import IconButton from '../IconButton/IconButton';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import PageName from '../PageName/PageName';
import './AppHead.scss';
import { useHistory, useLocation } from 'react-router';

const specialPaths = ['/preferences'];
const placeDisplayPaths = ['/favourites', '/daily-place-list'];
const justifyStyle = { justifyContent: 'space-between' };
function AppHead() {
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const location = useLocation();
  const history = useHistory();

  const handleBtnClick = () => {
    switch (location.pathname) {
      case '/map':
      case '/fullscreen-picture':
      case '/preferences':
        history.goBack();
        break;
      default:
        setSelectedPlace(null);
        break;
    }
  };
  console.log(location.pathname);
  return (
    <header
      className="app-head"
      style={
        selectedPlace || location.pathname === '/preferences'
          ? justifyStyle
          : {}
      }
    >
      {(selectedPlace || specialPaths.includes(location.pathname)) && (
        <IconButton
          btnClass="app-head__icon"
          iconClass="fa fa-arrow-left"
          onClick={handleBtnClick}
        />
      )}

      <PageName />
      {(selectedPlace || specialPaths.includes(location.pathname)) && (
        <EmptyDiv />
      )}
      <AppHeadNav />
    </header>
  );
}

export default AppHead;
