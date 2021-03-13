import React, { useContext } from 'react';
import ErrorContext from '../../context/ErrorContext';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useFetchPlace from '../../hooks/useFetchPlace';
import Attribution from '../Attribution/Attribution';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';

function Place({ isMatched }) {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const [error] = useContext(ErrorContext);
  const { isLoading } = useFetchPlace({ autoFetch: true });
  const place = selectedPlace || randomPlace;

  const handleClick = (e) => {
    e.stopPropagation();
    !isMatched && setSelectedPlace(place);
  };
  return (
    <div className="place">
      {(!error.isGeoActive && (
        <Error text="Your location couldn't be set, try to set your location manually." />
      )) ||
        (isLoading ? (
          <Loader />
        ) : place ? (
          <PlaceContent>
            <PlaceThumbnail
              place={place}
              icon="fas fa-map"
              handleClick={handleClick}
            />
            <PlaceDetails place={place} />
            <PlaceDescription place={place} />
            {place.img?.attribution && <Attribution place={place} />}
          </PlaceContent>
        ) : (
          <Error text="No place was found." />
        ))}
    </div>
  );
}

export default Place;
