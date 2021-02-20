import React from 'react'
import { Link } from 'react-router-dom';
import "./ReturnLink.scss";
function ReturnLink({path, handleReturnClick}) {
    return (
      <Link
        className="return-link"
        to={path}
        onClick={handleReturnClick}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
    );
}

export default ReturnLink
