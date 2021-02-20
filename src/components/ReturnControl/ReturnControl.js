import React from 'react'
import { Link } from 'react-router-dom';
import "./ReturnControl.scss";
function ReturnControl({path, handleReturnClick}) {
    return (
      <Link
        className="return-control"
        to={path}
        onClick={handleReturnClick}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
    );
}

export default ReturnControl
