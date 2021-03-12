import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss';
import { Redirect } from 'react-router';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import RandomPlaceContext from '../../context/RandomPlaceContext';

function Map() {
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const place = selectedPlace || randomPlace;
  if (!place) {
    return <Redirect to="/" />;
  }

  const { point, preview } = place;
  const { name, text } = place.content;
  const position = [point.lat, point.lon];

  return (
    <div className="map">
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup position={position}>
            <h2 className="map__place-name">{name}</h2>
            <img
              src={preview}
              alt=""
              className="map__img"
            />
            <p className="map__text">{text}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
