import React from 'react';
import './SearchRadiusItem.scss';
function SearchRadiusItem() {
  return (
    <li className="search-radius-item">
      <label htmlFor="search-radius" className="search-radius-item__label">
        Search Radius:
      </label>
    {/*   <input
        id="search-radius"
        type="number"
        className="search-radius-item__input"
      /> */}
    </li>
  );
}

export default SearchRadiusItem;
