import React, { useContext, useEffect, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import LocationItem from '../LocationItem/LocationItem';
import MobileNav from '../MobileNav/MobileNav';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
function Preferences() {
  const titleContext = useContext(TitleContext);
  const userContext = useContext(UserContext);
  const [userState, dispatchUser] = userContext;
  const [, setTitle] = titleContext;
  const [latValue, setLatValue] = useState('');
  const [lonValue, setLonValue] = useState('');
  const [radiusValue, setRadiusValue] = useState('');
  useEffect(() => {
    const profile = userState.profile;
    const preferences = profile.preferences;
    const lat = preferences.location.lat;
    const lon = preferences.location.lon;
    const radius = preferences.radius;
    setTitle('Preferences');
    const newProfile = {
      ...userState.profile,
      preferences: {
        radius: radiusValue || radius,
        location: {
          lat: latValue || lat,
          lon: lonValue || lon,
        },
      },
    };
    dispatchUser({ type: 'CHANGE_PROFILE', payload: newProfile });
  }, [lonValue, latValue, radiusValue]);
  useEffect(() => {
    const preferences = userState.profile.preferences;
    const lat = preferences.location.lat;
    const lon = preferences.location.lon;
    setLatValue(lat);
    setLonValue(lon);
  }, []);
  useEffect(() => {
    const preferences = userState.profile.preferences;
    const radius = preferences.radius;
    setRadiusValue(radius);
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
