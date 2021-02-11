import React from 'react';
import './NameInput.scss';
function NameInput() {
  return (
    <>
      <input
        type="text"
        className="name-input"
        maxLength="15"
        placeholder="Name"
      />
    </>
  );
}

export default NameInput;
