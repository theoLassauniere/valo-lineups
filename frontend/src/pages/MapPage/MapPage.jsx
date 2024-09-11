import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import LineupSelection from '../../components/LineupSelection/LineupSelection';

function MapPage() {
    const { mapName } = useParams();
    const location = useLocation();
    const data = location.state;

    return (
        <LineupSelection map={mapName} minimap={data}/>
    );
}

export default MapPage;