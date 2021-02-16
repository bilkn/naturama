import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import IconButton from '../../components/IconButton/IconButton';
import Place from '../../components/Place/Place';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Favourites');
  }, []);

  return (
    <div className="favourites">
      <ul className="favourites-list">
        {(selectedPlace && <Place place={selectedPlace} />) ||
          (userState &&
            userState.favourites.map((place) => (
              <PlaceItem
                place={place}
                setSelectedPlace={setSelectedPlace}
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
