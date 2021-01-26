import React from 'react';
import './Favourites.scss';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import AddFavouriteButton from '../AddFavouriteButton/AddFavouriteButton';
function Favourites() {
  return (
    <div className="favourites">
      <PlaceThumbnail classNames={['place-thumbnail']}> 
      <AddFavouriteButton />
      </PlaceThumbnail>
    </div>
  );
}

export default Favourites;
