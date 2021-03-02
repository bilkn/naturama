import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Redirect } from 'react-router';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import './Map.scss';
function Map() {
  const [selectedPlace] = useContext(SelectedPlaceContext);

  if (!selectedPlace) {
    return <Redirect to="/" />;
  }

  const {
    point,
    preview: { source, height, width },
  } = selectedPlace;
  const { name, text } = selectedPlace.content;
  const position = [point.lat, point.lon];

  return (
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
  );
}

export default Map;
