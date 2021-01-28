import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime.js';
import AppHead from '../AppHead/AppHead';
import DailyPlaceList from '../DailyPlaceList/DailyPlaceList';
import Favourites from '../Favourites/Favourites';
import FullscreenPicture from '../FullScreenPicture/FullScreenPicture';
import Home from '../Home/Home';
import MobileNav from '../MobileNav/MobileNav';
import Profile from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';
import { createBrowserHistory } from 'history';
function App() {
  const history = createBrowserHistory();
  return (
    <>
      <AppHead />
      <Router history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/favourites" component={Favourites}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/daily-place-list" component={DailyPlaceList}></Route>
        <MobileNav />
      </Router>
    </>
  );
}

export default App;
