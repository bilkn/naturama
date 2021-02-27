import React, { useEffect } from 'react';
import './NameInput.scss';
function NameInput(props) {
  const { username, setUsername, userState } = props;

  useEffect(() => {
    const {profile:{username} }= userState;
    if (username) setUsername(username);
  }, [setUsername, userState]);
  
  const handleChange = (e) => {
    e.preventDefault;
    if (username.length > 15) console.log('long name');
    // !!! Add notification.
    else setUsername(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="name-input"
        maxLength="15"
        placeholder="Name"
        value={username || ''}
        onChange={handleChange}
      />
    </>
  );
}

export default NameInput;
