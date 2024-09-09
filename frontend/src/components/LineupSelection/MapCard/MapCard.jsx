import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import bindMapImage from '../../../assets/map-minimaps/Bind-minimap.png'

const bounds = [[0, 0], [1000, 1000]];

const MapCard = () => {
    const handleMarkerClick = (place) => {
        console.log('Location selected', place);
    };

    const markers = [
        { position: [500, 500], name: 'Point A' },
    ];

    return (
        <MapContainer
            center={[500, 500]}
            zoom={0}
            minZoom={-2}
            maxZoom={2}
            style={{ height: '400px', width: '100%' }}
            crs={L.CRS.Simple}
        >
            <ImageOverlay url={bindMapImage} bounds={bounds} />
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    eventHandlers={{
                        // click: () => handleMarkerClick(marker.name),
                    }}
                >
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapCard;