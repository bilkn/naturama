import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import PlaceThumbnail from '../../components/PlaceThumbnail/PlaceThumbnail';
import AddFavouriteButton from '../../components/AddFavouriteButton/AddFavouriteButton';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import getDailyPlaceList from '../../helpers/getDailyPlaceList';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  useEffect(async () => {
    setTitle('Favourites');
    const places = await getDailyPlaceList();
    console.log(places)
  }, []);
  return (
    <div className="favourites">
      <div className="favourites-list">
        {userState &&
          userState.favourites.map((place) => (
            <PlaceItem place={place} key={place.xid} />
          ))}
      </div>
      <MobileNav />
    </div>
  );
}

export default Favourites;
