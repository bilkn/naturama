import React from 'react'
import AddFavouriteButton from '../AddFavouriteButton/AddFavouriteButton';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import "./DailyPlaceList.scss";
function DailyPlaceList() {
    return (
      <div className="daily-place-list">
        <PlaceThumbnail
          classNames={['place-thumbnail', 'daily-place-list__place']}
        >
          <AddFavouriteButton />
          </PlaceThumbnail>
        {/* <PlaceThumbnail
          classNames={['place-thumbnail', 'daily-place-list__place']}
        />
        <PlaceThumbnail
          classNames={['place-thumbnail', 'daily-place-list__place']}
        />
        <PlaceThumbnail
          classNames={['place-thumbnail', 'daily-place-list__place']}
        /> */}
      </div>
    );
}

export default DailyPlaceList
