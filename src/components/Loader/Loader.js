import React from 'react';
import './Loader.scss';

function Loader({...restProps}) {
  return (
    <div className="loader" {...restProps}>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
