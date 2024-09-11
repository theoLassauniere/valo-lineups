import "./ShowMapsButton.scss"

function showMapsButton({onClick}){
    return (
        <button className="showMapsButton" onClick={onClick}>
            <span className="text">Select a map to practice</span>
        </button>
    );
}

export default showMapsButton;