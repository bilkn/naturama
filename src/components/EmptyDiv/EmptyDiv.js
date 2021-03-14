import React from 'react';
import './EmptyDiv.scss';

function EmptyDiv({ className }) {
  return <div className={`empty-div ${className || ''}`}></div>;
}

export default EmptyDiv;
