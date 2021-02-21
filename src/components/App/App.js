import 'regenerator-runtime/runtime.js';
import 'normalize.css';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppHead from '../AppHead/AppHead';
import DailyPlaceList from '../../pages/DailyPlaceList/DailyPlaceList';
import Favourites from '../../pages/Favourites/Favourites';
import FullscreenPicture from '../../pages/FullscreenPicture/FullScreenPicture';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import DarkBackgroundProvider from '../../providers/DarkBackgroundProvider/DarkBackGroundProvider';
import PlaceProvider from '../../providers/RandomPlaceProvider/RandomPlaceProvider';
import SelectedPlaceProvider from '../../providers/SelectedPlaceProvider/SelectedPlaceProvider';
import UserProvider from '../../providers/UserProvider/UserProvider';
import TitleProvider from '../../providers/TitleProvider/TitleProvider';
import DBProvider from '../../providers/DBProvider/DBProvider';
import ErrorProvider from '../../providers/ErrorProvider/ErrorProvider';
import Preferences from '../Preferences/Preferences';
import db from '../../helpers/dexie';
import MobileNav from '../MobileNav/MobileNav';

function App() {
  useEffect(() => {
    db.open();
  }, []);
  return (
    <>
      <ErrorProvider>
        <DBProvider>
          <DarkBackgroundProvider>
            <TitleProvider>
              <UserProvider>
                <SelectedPlaceProvider>
                  <PlaceProvider>
                    <Router>
                      <MobileNav />
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                          exact
                          path="/favourites"
                          component={Favourites}
                        />
                        <Route exact path="/profile" component={Profile} />
                        <Route
                          exact
                          path="/daily-place-list"
                          component={DailyPlaceList}
                        />
                        <Route
                          exact
                          path="/fullscreen-picture"
                          component={FullscreenPicture}
                        />
                        <Route
                          exact
                          path="/preferences"
                          component={Preferences}
                        />
                      </Switch>
                    </Router>
                  </PlaceProvider>
                </SelectedPlaceProvider>
              </UserProvider>
            </TitleProvider>
          </DarkBackgroundProvider>
        </DBProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
