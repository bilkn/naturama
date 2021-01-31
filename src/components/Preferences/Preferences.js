import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import './Preferences.scss';
function Preferences() {
     const titleContext = useContext(TitleContext);
     const [, setTitle] = titleContext;

     useEffect(() => {
       setTitle('Preferences');
     }, []);
  return (
    <div className="preferences">
      <ul className="map-options-list">
        <li className="map-options-list__item">
          <label htmlFor="" className="map-options-list__label">
            Search Radius:
          </label>
          <input type="number" className="map-options-list__input" />
        </li>
        <li className="map-options-list__item">
          <label htmlFor="location" className="map-options-list__label">
            <input
              id="location"
              type="number"
              className="map-options-list__input--location"
            />
            Location:
          </label>
          <input type="number" className="map-options-list__input--location" />
        </li>
      </ul>
    </div>
  );
}

export default Preferences;
