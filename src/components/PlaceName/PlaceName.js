import React from 'react';
import './PlaceName.scss';
function PlaceName({ name, ...otherProps }) {
  return (
    <p className="place-name" {...otherProps}>
      {name}
    </p>
  );
}

export default PlaceName;
