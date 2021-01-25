import React from 'react'
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import "./DailyPlaceList.scss";
function DailyPlaceList() {
    return (
        <div className= "daily-place-list">
            <PlaceThumbnail />
            <PlaceThumbnail />
            <PlaceThumbnail />
            <PlaceThumbnail />
        </div>
    )
}

export default DailyPlaceList
