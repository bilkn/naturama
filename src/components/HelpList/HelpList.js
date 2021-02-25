import React from 'react';
import HelpListItem from '../HelpListItem/HelpListItem';
import './HelpList.scss';
function HelpList() {
  return (
    <ol className="help-list">
      <HelpListItem
        title="Favourites"
        text="You can add a place to your favourites, by this way you can still access the place picture, and description."
      />
      <HelpListItem
        title="Profile"
        text="You can add a place to your favourites, by this way you can still access the place picture, and description."
      />
      <HelpListItem
        title="Contact"
        text='In order to contact with me via my github, linkedin, or email, you can checkout the "Contact" section .'
      />
      <HelpListItem
        title="Daily Place List"
        text="If your browser, supports indexedDB, and you have give permission for browser storage (IndexedDB), 5 new place will be suggested to you everyday."
      />
    </ol>
  );
}

export default HelpList;
