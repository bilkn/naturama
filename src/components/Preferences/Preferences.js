import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import editUser from '../../helpers/editUser';
import LocationItem from '../LocationItem/LocationItem';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
import db from '../../helpers/dexie';
import MobileNavTop from '../MobileNavTop/MobileNavTop';
import EmptyDiv from '../EmptyDiv/EmptyDiv';
import ReturnLink from '../ReturnLink/ReturnLink';
import ErrorContext from '../../context/ErrorContext';

function Preferences() {
  const [userState, dispatch] = useContext(UserContext);
  const [latValue, setLatValue] = useState('');
  const [lonValue, setLonValue] = useState('');
  const [radiusValue, setRadiusValue] = useState('');
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (userState) {
      const {
        profile: { preferences },
      } = userState;
      const {
        location: { lat },
      } = preferences;
      const {
        location: { lon },
      } = preferences;
      setLatValue(lat);
      setLonValue(lon);
    }
  }, [userState]);

  useEffect(() => {
    if (userState) {
      const {
        profile: { preferences },
      } = userState;
      const { radius } = preferences;
      setRadiusValue(radius);
    }
  }, [userState]);
  const handleWindowClick = async () => {
    // Saves the configured preferences to the state and database, after closing the preferences.
    if (!document.querySelector('.preferences')) {
      if (userState) {
        const { profile } = userState;
        const { preferences } = profile;
        const {
          location: { lat },
        } = preferences;
        const {
          location: { lon },
        } = preferences;
        const { radius } = preferences;
        const newPreferences = {
          radius: radiusValue || radius,
          location: {
            lat: latValue || lat,
            lon: lonValue || lon,
          },
        };
        const newUser = editUser(userState, [['preferences', newPreferences]]);
        try {
          error.isDBActive &&
            (await db.profile.update(3, { preferences: newPreferences }));
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
      <MobileNavTop>
        <ReturnLink path="/profile" />
        <h2 className="preferences__header">Preferences</h2>
        <EmptyDiv />
      </MobileNavTop>
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
      </ul>
    </div>
  );
}

export default Preferences;
