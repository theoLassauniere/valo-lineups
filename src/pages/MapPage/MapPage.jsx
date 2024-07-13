import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../../components/Map/Map';

function MapPage() {
    const { mapName } = useParams();

    return (
        <Map map={mapName}/>
    );
}

export default MapPage;