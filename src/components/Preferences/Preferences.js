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
  useEffect(() => {
    const preferences = userState.profile.preferences;
    setTitle('Preferences');
    console.log(latValue, lonValue);
    const newProfile = {
      ...userState.profile,
      preferences: {
        ...preferences,
        location: {
          lat: latValue,
          lon: lonValue,
        },
      },
    };
    console.log('retun effect');
    dispatchUser({ type: 'CHANGE_PROFILE', payload: newProfile });
  }, [lonValue, latValue]);
  useEffect(() => {
    const preferences = userState.profile.preferences;
    const lat = preferences.location.lat;
    const lon = preferences.location.lon;
    setLatValue(lat);
    setLonValue(lon);
  }, []);
  return (
    <div className="preferences">
      <ul className="preferences__map-options-list">
        <SearchRadiusItem />
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
