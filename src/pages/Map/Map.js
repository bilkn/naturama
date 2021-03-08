import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss';
import { Redirect } from 'react-router';
import EmptyDiv from '../../components/EmptyDiv/EmptyDiv';
import IconButton from '../../components/IconButton/IconButton';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import PageName from '../../components/PageName/PageName';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import RandomPlaceContext from '../../context/RandomPlaceContext';
function Map({ history }) {
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const place = selectedPlace || randomPlace;
  if (!place) {
    return <Redirect to="/" />;
  }
  const handleBtnClick = () => {
    history.goBack();
  };

  const {
    point,
    preview: { source, height, width },
  } = place;
  const { name, text } = place.content;
  const position = [point.lat, point.lon];

  return (
    <div className="map">
      <MobileNavTop>
        <IconButton iconClass="fa fa-arrow-left" onClick={handleBtnClick} />
        <PageName pageName="Map" />
        <EmptyDiv />
      </MobileNavTop>
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup position={position}>
            <h2 className="map__place-name">{name}</h2>
            <img
              src={source}
              alt=""
              className="map__img"
              height={height}
              width={width}
            />
            <p className="map__text">{text}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
