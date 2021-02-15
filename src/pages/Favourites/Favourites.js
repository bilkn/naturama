import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  useEffect(() => {
    setTitle('Favourites');
  }, []);

  return (
    <div className="favourites">
      <ul className="favourites-list">
        {userState &&
          userState.favourites.map((place) => (
            <PlaceItem place={place} key={place.xid} />
          ))}
      </ul>
      <MobileNav />
    </div>
  );
}

export default Favourites;
