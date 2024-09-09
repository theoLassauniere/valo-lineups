import React from 'react';
import { useParams } from 'react-router-dom';
import LineupSelection from '../../components/LineupSelection/LineupSelection';

function MapPage() {
    const { mapName } = useParams();

    return (
        <LineupSelection map={mapName}/>
    );
}

export default MapPage;