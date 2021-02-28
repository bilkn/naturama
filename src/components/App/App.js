import 'regenerator-runtime/runtime.js';
import 'normalize.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DarkBackgroundProvider from '../../providers/DarkBackgroundProvider/DarkBackGroundProvider';
import PlaceProvider from '../../providers/RandomPlaceProvider/RandomPlaceProvider';
import SelectedPlaceProvider from '../../providers/SelectedPlaceProvider/SelectedPlaceProvider';
import UserProvider from '../../providers/UserProvider/UserProvider';
import DBProvider from '../../providers/DBProvider/DBProvider';
import ErrorProvider from '../../providers/ErrorProvider/ErrorProvider';
import UserRequestProvider from '../../providers/UserRequestProvider/UserRequestProvider';
import Home from '../../pages/Home/Home';
import Favourites from '../../pages/Favourites/Favourites';
import DailyPlaceList from '../../pages/DailyPlaceList/DailyPlaceList';
import FullscreenPicture from '../../pages/FullscreenPicture/FullScreenPicture';
import Preferences from '../Preferences/Preferences';
import Profile from '../../pages/Profile/Profile';
import MobileNav from '../MobileNav/MobileNav';
import Help from '../../pages/Help/Help';
import Map from '../../pages/Map/Map';
function App() {
  return (
    <>
      <ErrorProvider>
        <DBProvider>
          <DarkBackgroundProvider>
            <UserRequestProvider>
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
                        <Route exact path="/help" component={Help} />
                        <Route exact path="/map" component={Map} />
                      </Switch>
                    </Router>
                  </PlaceProvider>
                </SelectedPlaceProvider>
              </UserProvider>
            </UserRequestProvider>
          </DarkBackgroundProvider>
        </DBProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
