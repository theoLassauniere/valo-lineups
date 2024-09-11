import './MapButton.scss';
import { useNavigate } from "react-router-dom";

function MapButton({mapName, mapImage, mapMinimap}) {
    const navigate = useNavigate();

    const navigateToMap = () => {
        console.log("minimap on clicked :", mapMinimap);
        navigate(`/${mapName}`, {state: {mapMinimap}});
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