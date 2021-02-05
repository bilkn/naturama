import './EditPersonUIControls.scss';
import React from "react";
function EditPersonUIControls({ handleAcceptClick }) {
  return (
    <div className="edit-person-ui-controls">
      <button
        className="edit-person-ui-controls__accept-btn"
        onClick={(e)=>handleAcceptClick(e)}
      >
        <i
          className="fas fa-check-circle edit-person-ui-controls__icon"
          aria-hidden={true}
        ></i>
      </button>
    </div>
  );
}

export default EditPersonUIControls;
