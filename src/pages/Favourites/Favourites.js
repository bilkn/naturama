import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import PlaceThumbnail from '../../components/PlaceThumbnail/PlaceThumbnail';
import AddFavouriteButton from '../../components/AddFavouriteButton/AddFavouriteButton';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
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
      <MobileNav />
    </div>
  );
}

export default Favourites;
