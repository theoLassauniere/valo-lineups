import './MapButton.scss';
import { useNavigate } from "react-router-dom";

function MapButton({mapName, mapImage}) {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate(`/${mapName}`);
    };

    return (
        <div>
            <button className="mapButton" onClick={navigateToMap}>
                <img src={mapImage} className='mapImage' alt='Map' />
                <p className='mapName'>{mapName}</p>
            </button>
        </div>

    )
}

export default MapButton;