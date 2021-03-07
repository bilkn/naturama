import React from 'react';
import './HelpListItem.scss';
function HelpListItem({ title, text, iconClass }) {
  return (
    <li className="help-list-item">
      <h3 className="help-list-item__title">
        <i className={`${iconClass} help-list-item__icon`} />
        {title}
      </h3>
      <p className="help-list-item__text">{text}</p>
    </li>
  );
}

export default HelpListItem;
