import React from 'react';
import 'regenerator-runtime/runtime.js';
import AppHead from '../AppHead/AppHead';
import DailyPlaceList from '../DailyPlaceList/DailyPlaceList';
import Favourites from '../Favourites/Favourites';
import Home from '../Home/Home';
import MobileNav from '../MobileNav/MobileNav';
import Profile from '../Profile/Profile';
function App() {
  return (
    <>
      <AppHead />
      <Profile />
      <MobileNav />
    </>
  );
}

export default App;
