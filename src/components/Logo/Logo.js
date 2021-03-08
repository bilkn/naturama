import React from 'react';
import './Logo.scss';

function Logo({ className }) {
  return <h1 className={`logo ${className || ''}`}>NATURAMA</h1>;
}

export default Logo;
