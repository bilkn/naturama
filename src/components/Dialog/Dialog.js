import React from 'react';
import './Dialog.scss';
function Dialog(props) {
  const { text, operationHandler, setDialog } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    const btnText = e.target.textContent;

    if (btnText === 'Yes') {
      operationHandler();
    } else if (btnText === 'No') {
      setDialog({isDialogOpen:false, text:"", operation:""})
    }
  };

  return (
    <div className="dialog">
      <p className="dialog__text">{text}</p>
      <div className="dialog-controls">
        <button
          className="dialog-controls__btn"
          onClick={handleClick}
          autoFocus
        >
          Yes
        </button>
        <button
          className="dialog-controls__btn dialog-controls__btn--no-margin"
          onClick={handleClick}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Dialog;
