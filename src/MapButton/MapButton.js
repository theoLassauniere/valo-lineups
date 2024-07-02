import './MapButton.scss';

import logo from '../assets/logo192.png';

function MapButton() {
    return (
        <div>
            <button className="mapButton">
                <img src={logo} className='mapImage' alt='Map' />
                Map Name
            </button>
        </div>

    )
}

export default MapButton;