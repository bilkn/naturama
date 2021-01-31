import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import LocationItem from '../LocationItem/LocationItem';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
function Preferences() {
  const titleContext = useContext(TitleContext);
  const [, setTitle] = titleContext;
  useEffect(() => {
    setTitle('Preferences');
  }, []);
  return (
    <div className="preferences">
      <ul className="preferences__map-options-list">
        <SearchRadiusItem />
        <LocationItem />
      </ul>
    </div>
  );
}

export default Preferences;
