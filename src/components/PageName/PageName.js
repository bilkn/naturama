import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useMatchMedia from '../../hooks/useMatchMedia';
import Logo from '../Logo/Logo';
import './PageName.scss';

function PageName() {
  const location = useLocation();
  const [pageName, setPageName] = useState('');
  const [place] = useContext(SelectedPlaceContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  useEffect(() => {
    setPageName('');
    if (location.pathname === '/fullscreen-picture' && place) {
      setPageName(place.content.name);
    }
    switch (location.pathname) {
      case '/favourites':
        setPageName('Favourites');
        break;
      case '/daily-place-list':
        setPageName('Daily List');
        break;
      case '/profile':
        setPageName('Profile');
        break;
      case '/map':
        setPageName('Map');
        break;
      case '/help':
        setPageName('Help');
        break;
      case '/preferences':
        setPageName('Preferences');
        break;
      default:
        break;
    }
  }, [location, place]);

  return location.pathname === '/' || isMatched ? (
    <Logo />
  ) : (
    <h1
      className="page-name"
      style={
        location.pathname === '/fullscreen-picture' ? { fontSize: '1rem' } : {}
      }
    >
      {pageName}
    </h1>
  );
}

export default PageName;
