import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import TitleContext from '../../context/TitleContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserContext from '../../context/UserContext';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import IconButton from '../../components/IconButton/IconButton';
import Place from '../../components/Place/Place';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import PlaceList from '../../components/PlaceList/PlaceList';
function Favourites() {
  const [, setTitle] = useContext(TitleContext);
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  useEffect(() => {
    setTitle('Favourites');
  }, []);

  return (
    <div className="favourites">
      {(selectedPlace && <Place place={selectedPlace} />) || (
        <PlaceList userState={userState} setSelectedPlace={setSelectedPlace} />
      )}
      <MobileNav />
    </div>
  );
}

export default Favourites;
