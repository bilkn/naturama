import React, { useContext } from 'react';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import AppHeadNav from '../AppHeadNav/AppHeadNav';
import IconButton from '../IconButton/IconButton';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import PageName from '../PageName/PageName';
import './AppHead.scss';
import { useHistory, useLocation } from 'react-router';

const specialPaths = ['/preferences', '/map', '/help'];

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
      case '/help':
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
      style={
        (selectedPlace && location.pathname !== '/') ||
        specialPaths.includes(location.pathname)
          ? justifyStyle
          : {}
      }
    >
      {((selectedPlace && location.pathname !== '/') ||
        specialPaths.includes(location.pathname)) && (
        <IconButton
          ariaLabel="Previous page"
          btnClass="app-head__icon"
          iconClass="fa fa-arrow-left"
          onClick={handleBtnClick}
        />
      )}

      <PageName />
      {((selectedPlace && location.pathname !== '/') ||
        specialPaths.includes(location.pathname)) && <EmptyDiv />}
      <AppHeadNav />
    </header>
  );
}

export default AppHead;
