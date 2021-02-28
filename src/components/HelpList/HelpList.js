import React from 'react';
import HelpListItem from '../HelpListItem/HelpListItem';
import './HelpList.scss';
function HelpList() {
  return (
    <ol className="help-list">
      <HelpListItem
        title="Home"
        text="If your location is set correctly, you will automatically see a new location suggestion on the home page, every time you open the app."
      />
      <HelpListItem
        title="Favourites"
        text="You can see the places you have added to your favorites on the favorites page."
      />
      <HelpListItem
        title="Profile"
        text="You can customize your profile or contact with me on the profile page."
      />
      <HelpListItem
        title="Daily Place List"
        text="If you are not in incognito mode, and your location is set correctly, five new places will be suggested to you on the daily list page everyday."
      />
    </ol>
  );
}

export default HelpList;
