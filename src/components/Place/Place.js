import React, { useContext } from 'react';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import useFetchPlace from '../../hooks/useFetchPlace';
import Attribution from '../Attribution/Attribution';
import Loader from '../Loader/Loader';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';

function Place({ isMatched }) {
  const [randomPlace] = useContext(RandomPlaceContext);
  const [selectedPlace, setSelectedPlace] = useContext(SelectedPlaceContext);
  const { isLoading } = useFetchPlace({ autoFetch: true });
  const place = selectedPlace || randomPlace;

  const handleClick = (e) => {
    e.stopPropagation();
    !isMatched && setSelectedPlace(place);
  };

  return (
    <div className="place">
      {isLoading && <Loader style={{all:"unset", margin: 'auto' }} />}
      {place && (
        <PlaceContent
          className={isLoading ? 'place--hidden' : 'place--visible'}
        >
          <PlaceThumbnail
            place={place}
            icon="fas fa-map"
            handleClick={handleClick}
            className={place.img ? '' : 'place-thumbnail--no-img '}
          />
          <PlaceDetails place={place} />
          <PlaceDescription place={place} />
          {place.img?.attribution && <Attribution place={place} />}
        </PlaceContent>
      )}
    </div>
  );
}

export default Place;
