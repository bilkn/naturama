import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime.js';
import AppHead from '../AppHead/AppHead';
import Contact from '../Contact/Contact';
import DailyPlaceList from '../../pages/DailyPlaceList/DailyPlaceList';
import EditProfile from '../EditProfile/EditProfile';
import Favourites from '../../pages/Favourites/Favourites';
import FullscreenPicture from '../../pages/FullscreenPicture/FullScreenPicture';
import Home from '../../pages/Home/Home';
import MobileNav from '../MobileNav/MobileNav';
import PlaceProvider from '../PlaceProvider/PlaceProvider';
import Preferences from '../Preferences/Preferences';
import Profile from "../../pages/Profile/Profile";
import SocialLinks from '../SocialLinks/SocialLinks';
import TitleProvider from '../TitleProvider/TitleProvider';
import UserProvider from '../UserProvider/UserProvider';
function App() {
  return (
    <>
      <TitleProvider>
        <UserProvider>
          <PlaceProvider>
            <AppHead />
            <Router>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/favourites" component={Favourites}></Route>
              <Route exact path="/profile" component={Profile}></Route>
              <Route
                exact
                path="/daily-place-list"
                component={DailyPlaceList}
              ></Route>
              <Route
                exact
                path="/fullscreen-picture"
                component={FullscreenPicture}
              ></Route>
            </Router>
          </PlaceProvider>
        </UserProvider>
      </TitleProvider>
    </>
  );
}

export default App;
