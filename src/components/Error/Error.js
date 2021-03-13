import React from 'react';
import "./Error.scss"

function Error({text, style}) {
  return (
    <div className="error" style={style || {}}>
      <p className="error__text">{text}</p>
    </div>
  );
}

export default Error;
