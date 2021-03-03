import './DarkBackground.scss';
import React from 'react';

function DarkBackground(props) {
  const backgroundHandler = () => {
    // Sets all the states to false in the props, in order to close any popped UI.
    Object.values(props).forEach((prop) => {
      if (prop instanceof Function) prop(false);
    });
  };

  return <div className="dark-background " onClick={backgroundHandler}></div>;
}

export default DarkBackground;
