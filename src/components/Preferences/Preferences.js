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
import createNotificationTimeout from '../../helpers/createNotificationTimeout';

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
        location: { lon },
        radius,
      } = preferences;

      setLatValue(lat);
      setLonValue(lon);
      setRadiusValue(radius);
    }
  }, [userState]);

  const handleSaveChanges = async () => {
    const {notifTimeoutID} = userState;
    notifTimeoutID && clearTimeout(notifTimeoutID);

    if (userState) {
      const newUser = createNewUserWithInputValues();
      const { preferences } = newUser.profile;
      try {
        error.isDBActive && (await db.profile.update(3, { preferences }));
        const newTimeoutID = createNotificationTimeout(dispatch, 2000);
        dispatch({ type: 'SAVE_PREFERENCES', payload: {newUser, notifTimeoutID :newTimeoutID }});
      } catch (err) {
        console.log(err);
      }
      configureGeoError();
    }
  };

  const configureGeoError = () => {
    if (!latValue || !lonValue) {
      setError({ ...error, isGeoActive: false });
    } else if (!error.isGeoActive) {
      setError({ ...error, isGeoActive: true });
    }
  };

  const createNewUserWithInputValues = () => {
    const { profile } = userState;
    const { preferences } = profile;
    const {
      location: { lat },
      location: { lon },
      radius,
    } = preferences;
    const newPreferences = {
      radius: radiusValue || radius,
      location: {
        lat: latValue || lat,
        lon: lonValue || lon,
      },
    };
    return editUser(userState, [['preferences', newPreferences]]);
  };

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
      <button className="preferences__btn" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
}

export default Preferences;
