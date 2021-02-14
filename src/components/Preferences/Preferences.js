import React, { useContext, useEffect, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import createNewUser from '../../helpers/createNewUser';
import LocationItem from '../LocationItem/LocationItem';
import MobileNav from '../MobileNav/MobileNav';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
import db from '../../helpers/dexie';
function Preferences() {
  const [, setTitle] = useContext(TitleContext);
  const [userState, dispatch] = useContext(UserContext);
  const [latValue, setLatValue] = useState('');
  const [lonValue, setLonValue] = useState('');
  const [radiusValue, setRadiusValue] = useState('');

  useEffect(() => {
    setTitle('Preferences');
  }, []);
 
  useEffect(() => {
    if (userState) {
      const preferences = userState.profile.preferences;
      const lat = preferences.location.lat;
      const lon = preferences.location.lon;
      setLatValue(lat);
      setLonValue(lon);
    }
  }, [userState]);

  useEffect(() => {
    if (userState) {
      const preferences = userState.profile.preferences;
      const radius = preferences.radius;
      setRadiusValue(radius);
    }
  }, [userState]);
  const handleWindowClick = async () => {
    // Saves the configured preferences to the state and database .
    if (!document.querySelector('.preferences')) {
      if (userState) {
        const profile = userState.profile;
        const preferences = profile.preferences;
        const lat = preferences.location.lat;
        const lon = preferences.location.lon;
        const radius = preferences.radius;
        const newPreferences = {
          radius: radiusValue || radius,
          location: {
            lat: latValue || lat,
            lon: lonValue || lon,
          },
        };
        const newUser = createNewUser(userState, [
          ['preferences', newPreferences],
        ]);
        try {
          await db.profile.update(3, { preferences: newPreferences });
          dispatch({ type: 'EDIT_USER', payload: newUser });
        } catch (err) {
          console.log(err);
          // Add notification.
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, [latValue, lonValue, radiusValue]);

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
