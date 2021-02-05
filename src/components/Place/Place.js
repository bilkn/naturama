import React, { useContext } from 'react';
import PlaceContext from '../../context/PlaceContext';
import PlaceContent from '../PlaceContent/PlaceContent';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './Place.scss';
function Place(props) {
  const {onPlaceClick} = props;
  const placeContext = useContext(PlaceContext);
  const [place] = placeContext;
 

  return (
    <div className="place" onClick= {onPlaceClick}>
      <PlaceContent>
        <PlaceThumbnail
          place={place}
          classNames={['place-thumbnail']}
          icon="fas fa-map"
        />
        <PlaceDetails place={place} />
      </PlaceContent>
      <PlaceDescription place={place} />
    </div>
  );
}

export default Place;
