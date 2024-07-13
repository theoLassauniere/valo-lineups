import React from "react";
import MapCard from "./MapCard/MapCard";
import AgentList from "./AgentList/AgentList";
import AgentAbilities from "./AgentAbilities/AgentAbilities";
import Side from "./Side/Side";
import "./Map.scss"

function Map({ map }) {
    return (
        <div className="mapContainer">
            <h1>Map: {map}</h1>
            <div>
                <MapCard/>
                <AgentList/>
                <AgentAbilities/>
                <Side/>
            </div>
        </div>
    );
}

export default Map;