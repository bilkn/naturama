import React from 'react';
import './Badge.scss';
function Badge({ count, className }) {
  return <span className={`badge ${className || ''}`}>{count}</span>;
}

export default Badge;
