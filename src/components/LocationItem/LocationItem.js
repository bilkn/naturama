import React, { useEffect, useState } from 'react';
import './LocationItem.scss';
function LocationItem(props) {
  const { latValue, lonValue, setLatValue, setLonValue } = props;
  const style = {
    marginRight: '1rem',
    marginLeft: '2.5rem',
  };

  const handleOnChangeLat = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = value > 90 ? 90 : value < -90 ? -90 : value;
    setLatValue(value);
  };
  const handleOnChangeLon = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = value > 180 ? 180 : value < -180 ? -180 : value;
    setLonValue(value);
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
          type="number"
          className="location-input-container__input"
          placeholder="lat"
          value={latValue}
          onChange={handleOnChangeLat}
          min="-90"
          max="90"
        />
        <input
          id="location"
          type="number"
          className="location-input-container__input"
          placeholder="lon"
          style={style}
          value={lonValue}
          onChange={handleOnChangeLon}
          min="-180"
          max="180"
        />
      </div>
    </li>
  );
}

export default LocationItem;
