import 'regenerator-runtime/runtime.js';
import 'normalize.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DarkBackgroundProvider from '../../providers/DarkBackgroundProvider/DarkBackGroundProvider';
import PlaceProvider from '../../providers/RandomPlaceProvider/RandomPlaceProvider';
import SelectedPlaceProvider from '../../providers/SelectedPlaceProvider/SelectedPlaceProvider';
import UserProvider from '../../providers/UserProvider/UserProvider';
import ErrorProvider from '../../providers/ErrorProvider/ErrorProvider';
import UserRequestProvider from '../../providers/UserRequestProvider/UserRequestProvider';
import Home from '../../pages/Home/Home';
import MobileNav from '../MobileNav/MobileNav';
import NotificationContainer from '../NotificationContainer/NotificationContainer';
import AppHead from '../AppHead/AppHead';
import LoadingProvider from '../../providers/LoadingProvider/LoadingProvider';
import Loader from '../Loader/Loader';

const DailyPlaceList = React.lazy(() =>
  import('../../pages/DailyPlaceList/DailyPlaceList')
);
const Favourites = React.lazy(() =>
  import('../../pages/Favourites/Favourites')
);
const Profile = React.lazy(() => import('../../pages/Profile/Profile'));
const FullscreenPicture = React.lazy(() =>
  import('../../pages/FullscreenPicture/FullScreenPicture')
);
const Map = React.lazy(() => import('../../pages/Map/Map'));
const Preferences = React.lazy(() => import('../Preferences/Preferences'));
const Help = React.lazy(() => import('../../pages/Help/Help'));

function App() {
  return (
    <>
      <ErrorProvider>
        <DarkBackgroundProvider>
          <UserRequestProvider>
            <UserProvider>
              <SelectedPlaceProvider>
                <PlaceProvider>
                  <LoadingProvider>
                    <Router>
                      <AppHead />
                      <MobileNav />
                      <NotificationContainer />
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <React.Suspense fallback={<Loader />}>
                          <Route path="/favourites" component={Favourites} />
                          <Route path="/profile" component={Profile} />
                          <Route
                            path="/daily-place-list"
                            component={DailyPlaceList}
                          />
                          <Route
                            path="/fullscreen-picture"
                            component={FullscreenPicture}
                          />
                          <Route path="/preferences" component={Preferences} />
                          <Route path="/help" component={Help} />
                          <Route path="/map" component={Map} />
                        </React.Suspense>
                      </Switch>
                    </Router>
                  </LoadingProvider>
                </PlaceProvider>
              </SelectedPlaceProvider>
            </UserProvider>
          </UserRequestProvider>
        </DarkBackgroundProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
