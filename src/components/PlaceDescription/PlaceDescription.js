import React from 'react'
import "./PlaceDescription.scss";
function PlaceDescription({place}) {
    const placeText = place;
    return (
        <div className= "place-description">
            <p className="place-description__text">{placeText}</p>
        </div>
    )
}

export default PlaceDescription
