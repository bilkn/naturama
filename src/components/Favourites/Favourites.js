import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import AddFavouriteButton from '../AddFavouriteButton/AddFavouriteButton';
import TitleContext from '../../context/TitleContext';
function Favourites() {
  const titleContext = useContext(TitleContext);
  const [, setTitle] = titleContext;
  
  useEffect(()=> {
    setTitle("Favourites")
  },[])
  return (
    <div className="favourites">
      <PlaceThumbnail classNames={['place-thumbnail']}> 
      <AddFavouriteButton />
      </PlaceThumbnail>
    </div>
  );
}

export default Favourites;
