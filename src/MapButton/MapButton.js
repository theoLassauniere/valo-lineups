import './MapButton.scss';

function MapButton({mapName, mapImage}) {
    return (
        <div>
            <button className="mapButton">
                <img src={mapImage} className='mapImage' alt='Map' />
                <p className='mapName'>{mapName}</p>
            </button>
        </div>

    )
}

export default MapButton;