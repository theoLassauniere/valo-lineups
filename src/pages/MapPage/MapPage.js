import React from 'react';
import { useParams } from 'react-router-dom';

function MapPage() {
    const { mapName } = useParams();

    return (
        <div>
            <h1>Map: {mapName}</h1>
        </div>
    );
}

export default MapPage;