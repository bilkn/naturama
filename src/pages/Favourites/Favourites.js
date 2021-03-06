import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Redirect } from 'react-router-dom';
import Error from '../../components/Error/Error';
import AsidePictureToolbar from '../../components/AsidePictureToolbar/AsidePictureToolbar';
import useMatchMedia from '../../hooks/useMatchMedia';
import LoadingContext from '../../context/LoadingContext';

function Favourites() {
  const [userState] = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const { isMatched } = useMatchMedia('(min-width:1024px)');
  const [, setIsLoading] = useContext(LoadingContext);
  const handlePlaceClick = (place) => {
    setIsLoading(true);
    setSelectedPlace(place);
  };
  if (!userState) {
    return <Redirect to="/" />;
  }
  return (
    <div className="favourites">
      {isMatched && selectedPlace && userState.favourites.length > 0 && (
        <AsidePictureToolbar />
      )}
      {(!userState.favourites.length && (
        <Error
          text="Your favourite list is empty."
          style={{ marginTop: '2rem' }}
        />
      )) ||
        (selectedPlace && <Place place={selectedPlace} />) || (
          <PlaceList
            list={userState.favourites}
            onClick={handlePlaceClick}
          />
        )}
    </div>
  );
}

export default Favourites;
