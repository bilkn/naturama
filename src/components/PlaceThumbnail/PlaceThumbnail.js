import React from 'react';
import img from "../../assets/img-2.jpg";
import "./PlaceThumbnail.scss";
function PlaceThumbnail() {
  
  return (
    <div className="place-thumbnail">
      <img src={img} alt="" className="place-thumbnail__img" />
      <p className="place-thumbnail__name">Wild Jungle</p>
    </div>
  );
}

export default PlaceThumbnail;
