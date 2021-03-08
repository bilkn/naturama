import React from 'react';
import { Link } from 'react-router-dom';
import './ReturnLink.scss';

function ReturnLink({ path, props }) {
  return (
    <Link className="return-link" to={path} {...props}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
    </Link>
  );
}

export default ReturnLink;
