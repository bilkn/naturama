import React, { useContext, useEffect, useState } from 'react';
import './Favourites.scss';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import IconButton from '../../components/IconButton/IconButton';
import Place from '../../components/Place/Place';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [displayedPlace, setDisplayedPlace] = useState(null);
  useEffect(() => {
    setTitle('Favourites');
  }, []);

  return (
    <div className="favourites">
      <ul className="favourites-list">
        {(displayedPlace && <Place place={displayedPlace} />) ||
          (userState &&
            userState.favourites.map((place) => (
              <PlaceItem
                place={place}
                setDisplayedPlace={setDisplayedPlace}
                key={place.xid}
              >
                {/* <IconButton btnClass="icon-btn" iconClass="fas fa-star" /> */}
              </PlaceItem>
            )))}
      </ul>
      <MobileNav />
    </div>
  );
}

export default Favourites;
