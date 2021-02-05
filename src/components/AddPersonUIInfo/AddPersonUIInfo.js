import './AddPersonUIInfo.scss';
import React from 'react';
function AddPersonUIINfo(props) {
  const { nameContainer, name, children } = props;

  return (
    <div className="add-person-ui-info-container">
      <input
        type="text"
        className="add-person-ui-info-container__name"
        ref={nameContainer}
        maxLength="15"
        placeholder="Name"
        defaultValue={name || ''}
      />
      {children}
    </div>
  );
}

export default AddPersonUIINfo;
