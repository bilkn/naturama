import React from 'react';
import './PlaceContent.scss';

function PlaceContent({ children, className }) {
  return <div className={`place-content ${className || ''}`}>{children}</div>;
}

export default PlaceContent;
