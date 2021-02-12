import React from 'react';
import './NameInput.scss';
function NameInput({ name, setName }) {
  const handleChange = (e) => {
    e.preventDefault;
    if (name.length > 15) console.log('long name');
    // Add modal
    else setName(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="name-input"
        maxLength="15"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
    </>
  );
}

export default NameInput;
