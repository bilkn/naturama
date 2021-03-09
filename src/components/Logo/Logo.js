import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo({ className }) {
  return (
    <h1 className={`logo ${className || ''}`}>
      <Link className='logo__link' to="/">
        NATURAMA
      </Link>
    </h1>
  );
}

export default Logo;
