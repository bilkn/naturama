import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'regenerator-runtime/runtime.js';
import AppHead from '../AppHead/AppHead';
import DailyPlaceList from '../../pages/DailyPlaceList/DailyPlaceList';
import Favourites from '../../pages/Favourites/Favourites';
import FullscreenPicture from '../../pages/FullscreenPicture/FullScreenPicture';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import DarkBackgroundProvider from '../../providers/DarkBackgroundProvider/DarkBackGroundProvider';
import PlaceProvider from '../../providers/PlaceProvider/PlaceProvider';
import UserProvider from '../../providers/UserProvider/UserProvider';
import TitleProvider from '../../providers/TitleProvider/TitleProvider';
function App() {
  return (
    <>
      <DarkBackgroundProvider>
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
      </DarkBackgroundProvider>
    </>
  );
}

export default App;
