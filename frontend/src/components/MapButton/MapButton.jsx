import './MapButton.scss';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function MapButton({mapName, mapImage, mapMinimap}) {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate(`/${mapName}`, {state: {mapMinimap}});
    };

    MapButton.propTypes = {
        mapName: PropTypes.string.isRequired,
        mapImage: PropTypes.string.isRequired,
        mapMinimap: PropTypes.string.isRequired,
    };

    return (
        <div>
            <button className="mapButton" onClick={navigateToMap}>
                <img src={mapImage} className='mapImage' alt='LineupSelection' />
                <p className='mapName'>{mapName}</p>
            </button>
        </div>

    )
}

export default MapButton;