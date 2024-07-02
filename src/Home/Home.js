import './Home.scss';
import MapButton from "../MapButton/MapButton";
import Titles from "./Titles/Titles";

function Home() {
    return (
        <div className="Home">
            <Titles className="Titles"/>
            <MapButton className="MapButton"/>
        </div>
    )
}

export default Home;