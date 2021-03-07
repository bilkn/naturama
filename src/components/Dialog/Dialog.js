import React from 'react';
import './Dialog.scss';
function Dialog(props) {
  const {
    text,
    operationHandler,
    setDialog,
    setShowDarkBackground,
    setShowDialog,
  } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    const btnText = e.target.textContent;
    if (btnText === 'Yes') {
      operationHandler();
    } else if (btnText === 'No') {
      setDialog({ text: '', operation: '' });
    }
    setShowDialog(false);
    setShowDarkBackground(false);
  };

  return (
    <div className="dialog">
      <p className="dialog__text">{text}</p>
      <div className="dialog-controls">
        <button className="dialog-controls__btn" onClick={handleClick}>
          Yes
        </button>
        <button
          className="dialog-controls__btn dialog-controls__btn--no-btn"
          onClick={handleClick}
          autoFocus
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Dialog;
