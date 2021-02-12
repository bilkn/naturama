import React from 'react';
import './SearchRadiusItem.scss';
function SearchRadiusItem({ radiusValue, setRadiusValue }) {
  const handleChange = (e) => {
    e.preventDefault();
    setRadiusValue(e.target.value);
  };
  return (
    <li className="search-radius-item">
      <label htmlFor="search-radius" className="search-radius-item__label">
        Search Radius:
      </label>
      <input
        id="search-radius"
        type="number"
        className="search-radius-item__input"
        value={radiusValue || ''}
        onChange={handleChange}
      />
    </li>
  );
}

export default SearchRadiusItem;
