import React from 'react';
import "./NameInput.scss";
function NameInput() {
  return (
    <>
      <input
        type="text"
        className="name-input"
       /*  ref={nameContainer} */
        maxLength="15"
        placeholder="Name"
     /*    defaultValue={name || ''} */
      />
    </>
  );
}

export default NameInput;
