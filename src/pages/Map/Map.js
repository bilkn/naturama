import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
import './Map.scss';
function Map() {
  const [selectedPlace] = useContext(SelectedPlaceContext);

  const { point } = selectedPlace || { point: { lat: 0, lon: 0 } };
  const center = [point.lat, point.lon];

  return (
    <MapContainer center={center} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
