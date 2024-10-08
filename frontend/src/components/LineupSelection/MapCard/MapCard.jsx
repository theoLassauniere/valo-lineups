import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapCard.scss';
import PropTypes from "prop-types";

const bounds = [[-220, -220], [195, 195]];

const MapCard = ({minimap}) => {

    MapCard.propTypes = {
        minimap: PropTypes.string.isRequired,
    };

    return (
        <MapContainer
            className="mapContainer"
            center={[0, 0]}
            zoom={0}
            minZoom={0}
            maxZoom={2}
            crs={L.CRS.Simple}
            attributionControl={false}  // Delete the bottom-right corner of the map component
        >
            <ImageOverlay url={minimap.mapMinimap} bounds={bounds} />
        </MapContainer>
    );
};
export default MapCard;