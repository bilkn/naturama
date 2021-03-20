import React from 'react';
import './LocationItem.scss';


function LocationItem(props) {
  const { latValue, lonValue, setLatValue, setLonValue } = props;

  const handleChangeLat = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = !value ? value : value > 90 ? 90 : value < -90 ? -90 : value;
    setLatValue(value);
  };
  const handleChangeLon = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = !value ? value : value > 180 ? 180 : value < -180 ? -180 : value;
    setLonValue(value);
  };

  return (
    <li className="location-item">
      <label htmlFor="lat" className="location-item__label">
        Location:
      </label>
      <div className="location-input-container">
        <input
          id="lat"
          type="number" 
          className="location-input-container__input"
          placeholder="lat"
          value={latValue || ''}
          onChange={handleChangeLat}
        />
        <input
          type="number"
          className="location-input-container__input"
          placeholder="lon"
          value={lonValue || ''}
          onChange={handleChangeLon}
        />
      </div>
    </li>
  );
}

export default LocationItem;
