import React from 'react';
import "./Error.scss"
function Error({text}) {
  return (
    <div className="error">
      <p className="error__text">{text}</p>
    </div>
  );
}

export default Error;
