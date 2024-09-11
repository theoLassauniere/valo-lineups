import React from "react";
import MapCard from "./MapCard/MapCard";
import AgentList from "./AgentList/AgentList";
import AgentAbilities from "./AgentAbilities/AgentAbilities";
import Side from "./Side/Side";
import "./LineupSelection.scss"
import PropTypes from "prop-types";

function LineupSelection({ map, minimap }) {

    LineupSelection.propTypes = {
        map: PropTypes.string.isRequired,
        minimap: PropTypes.string.isRequired,
    };

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