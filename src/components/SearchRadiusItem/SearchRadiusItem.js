import React from 'react';
import './SearchRadiusItem.scss';

function SearchRadiusItem({ radiusValue, setRadiusValue }) {
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length < 6) setRadiusValue(e.target.value);
  };
  return (
    <li className="search-radius-item">
      <label htmlFor="search-radius" className="search-radius-item__label">
        Search Radius:
      </label>
      <div className="search-radius-item__input-wrapper">
        <input
          id="search-radius"
          type="number"
          className="search-radius-item__input"
          value={radiusValue || ''}
          onChange={handleChange}
        />
        <span className="search-radius-item__span">KM</span>
      </div>
    </li>
  );
}

export default SearchRadiusItem;
