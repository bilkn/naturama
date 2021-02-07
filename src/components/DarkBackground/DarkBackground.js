import './DarkBackground.scss';
import React from 'react';

function DarkBackground(props) {
  const backgroundHandler = () => {
    Object.values(props).forEach((prop) => {
      if (prop instanceof Function) prop(false);
    });
  };

  return <div className="dark-background " onClick={backgroundHandler}></div>;
}

export default DarkBackground;
