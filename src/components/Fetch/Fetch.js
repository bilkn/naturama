import React, { useEffect, useState } from 'react';

function Fetch() {


  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      <img src={imgSrc} alt="img" />
    </div>
  );
}

export default Fetch;
