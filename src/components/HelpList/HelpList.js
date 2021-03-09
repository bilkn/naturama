import React from 'react';
import HelpListItem from '../HelpListItem/HelpListItem';
import './HelpList.scss';

function HelpList() {
  return (
    <ol className="help-list">
      <HelpListItem
        title="Home"
        text="If your location is set correctly, you will automatically see a new place suggestion on the home page, every time you open the app."
        iconClass="fas fa-home"
      />
      <HelpListItem
        title="Favourites"
        text="You can see the places you have added to your favourites on the favourites page."
        iconClass="fas fa-star"
      />
      <HelpListItem
        title="Profile"
        text="You can customize your profile or find my contact information on the profile page."
        iconClass="fas fa-user"
      />
      <HelpListItem
        title="Daily Place List"
        text="If you are not in incognito mode, and your location is set correctly, five new places will be suggested to you on the daily list page everyday."
        iconClass="fas fa-list-alt"
      />
    </ol>
  );
}

export default HelpList;
