import React from 'react';
import './NameInput.scss';
function NameInput({ username, setUsername }) {
  const handleChange = (e) => {
    e.preventDefault;
    if (username.length > 15) console.log('long name');
    // Add modal
    else setUsername(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="name-input"
        maxLength="15"
        placeholder="Name"
        value={username}
        onChange={handleChange}
      />
    </>
  );
}

export default NameInput;
