import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import bindMapImage from '../../../assets/map-minimaps/Bind-minimap.png'
import './MapCard.scss';

const bounds = [[-220, -220], [195, 195]];

const MapCard = () => {

    return (
        <MapContainer
            className="mapContainer"
            center={[0, 0]}
            zoom={0}
            minZoom={-2}
            maxZoom={2}
            crs={L.CRS.Simple}
            attributionControl={false}  // Delete the bottom-right corner of the map component
        >
            <ImageOverlay url={bindMapImage} bounds={bounds} />
        </MapContainer>
    );
};

export default MapCard;