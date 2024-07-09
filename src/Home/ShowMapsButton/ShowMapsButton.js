import "./ShowMapsButton.scss"

function showMapsButton({onClick}){
    return (
        <a role="button" className="showMapsButton" onClick={onClick}>
            <span className="text">Select a map to practice</span>
        </a>
    );
}

export default showMapsButton;