import React, { useEffect, useState } from 'react';
import './LocationItem.scss';
function LocationItem(props) {
  const { lonValue, latValue, setLonValue, setLatValue } = props;
  const style = {
    marginRight: '1rem',
    marginLeft: '2.5rem',
  };

  const handleOnChangeLon = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setLonValue(value);
  };
  const handleOnChangeLat = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setLatValue(value);
  };

  useEffect(() => {
    // !!! add initial user location
  }, []);

  return (
    <li className="location-item">
      <label htmlFor="location" className="location-item__label">
        Location:
      </label>
      <div className="location-input-container">
        <input
          id="location"
          type="number"
          className="location-input-container__input"
          placeholder="lon"
          style={style}
          value={lonValue}
          onChange={handleOnChangeLon}
        />
        <input
          type="number"
          className="location-input-container__input"
          placeholder="lat"
          value={latValue}
          onChange={handleOnChangeLat}
        />
      </div>
    </li>
  );
}

export default LocationItem;
