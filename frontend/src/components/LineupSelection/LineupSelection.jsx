import React from "react";
import MapCard from "./MapCard/MapCard";
import AgentList from "./AgentList/AgentList";
import AgentAbilities from "./AgentAbilities/AgentAbilities";
import Side from "./Side/Side";
import "./LineupSelection.scss"

function LineupSelection({ map, minimap }) {
    console.log("minimap on page loaded to string:", minimap.minimap);
    return (
        <div className="lineupSelection">
            <h1>Map: {map}</h1>
            <div>
                <MapCard minimap={minimap}/>
                <AgentList/>
                <AgentAbilities/>
                <Side/>
            </div>
        </div>
    );
}

export default LineupSelection;