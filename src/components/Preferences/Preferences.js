import React, { useContext, useEffect, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import createNewUser from '../../helpers/createNewUser';
import LocationItem from '../LocationItem/LocationItem';
import MobileNav from '../MobileNav/MobileNav';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
function Preferences() {
  const titleContext = useContext(TitleContext);
  const [userState, dispatchUser] = useContext(UserContext);
  const [, setTitle] = titleContext;
  const [latValue, setLatValue] = useState('');
  const [lonValue, setLonValue] = useState('');
  const [radiusValue, setRadiusValue] = useState('');
  useEffect(() => {
    if (userState) {
      const profile = userState.profile;
      const preferences = profile.preferences;
      const lat = preferences.location.lat;
      const lon = preferences.location.lon;
      const radius = preferences.radius;
      setTitle('Preferences');
      // Condition can be added in the future.
      const newUser = createNewUser(userState, [
        ['radius', radiusValue || radius],
        ['location', { lat: latValue || lat, lon: lonValue || lon }],
      ]);
      dispatchUser({ type: 'EDIT_USER', payload: newUser });
    }
  }, [lonValue, latValue, radiusValue]);

  useEffect(() => {
    if (userState) {
      const preferences = userState.profile.preferences;
      const lat = preferences.location.lat;
      const lon = preferences.location.lon;
      setLatValue(lat);
      setLonValue(lon);
    }
  }, []);
  useEffect(() => {
    if (userState) {
    const preferences = userState.profile.preferences;
    const radius = preferences.radius;
    setRadiusValue(radius);
    }
  }, []);
  return (
    <div className="preferences">
      <ul className="preferences__map-options-list">
        <SearchRadiusItem
          radiusValue={radiusValue}
          setRadiusValue={setRadiusValue}
        />
        <LocationItem
          latValue={latValue}
          lonValue={lonValue}
          setLatValue={setLatValue}
          setLonValue={setLonValue}
        />
        <MobileNav />
      </ul>
    </div>
  );
}

export default Preferences;
