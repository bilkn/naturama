import React from 'react';
import './LocationItem.scss';
function LocationItem() {
  const style = {
    marginRight: "1rem",
    marginLeft: "2.5rem"
  };
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
          style = {style}
        />
        <input
          type="number"
          className="location-input-container__input"
          placeholder="lat"
        />
      </div>
    </li>
  );
}

export default LocationItem;
