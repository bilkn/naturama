import React from 'react';
import 'regenerator-runtime/runtime.js';
import AppHead from '../AppHead/AppHead';
import DailyPlaceList from '../DailyPlaceList/DailyPlaceList';
import Home from '../Home/Home';
import MobileNav from '../MobileNav/MobileNav';
function App() {
  return (
    <>
      <AppHead />
      <DailyPlaceList />
      <MobileNav />
    </>
  );
}

export default App;
