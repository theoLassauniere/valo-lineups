import "./Home.scss";
import MapButton from "../MapButton/MapButton";
import Titles from "./Titles/Titles";
import abyss from "../assets/map-images/abyss.jpg";
import haven from "../assets/map-images/haven.jpg";
import bind from "../assets/map-images/bind.jpg";
import split from "../assets/map-images/split.jpg";
import fracture from "../assets/map-images/fracture.jpg";
import icebox from "../assets/map-images/icebox.jpg";
import breeze from "../assets/map-images/breeze.jpg";
import sunset from "../assets/map-images/sunset.jpg";
import ascent from "../assets/map-images/ascent.jpg";
import pearl from "../assets/map-images/pearl.jpg";
import lotus from "../assets/map-images/lotus.jpg";

function Home() {
    return (
        <div className="Home">
            <Titles className="Titles"/>
            <div className="Maps">
                <MapButton className="MapButton" mapName="Abyss" mapImage={abyss}/>
                <MapButton className="MapButton" mapName="Haven" mapImage={haven}/>
                <MapButton className="MapButton" mapName="Bind" mapImage={bind}/>
                <MapButton className="MapButton" mapName="Split" mapImage={split}/>
                <MapButton className="MapButton" mapName="Fracture" mapImage={fracture}/>
                <MapButton className="MapButton" mapName="Icebox" mapImage={icebox}/>
                <MapButton className="MapButton" mapName="Breeze" mapImage={breeze}/>
                <MapButton className="MapButton" mapName="Sunset" mapImage={sunset}/>
                <MapButton className="MapButton" mapName="Ascent" mapImage={ascent}/>
                <MapButton className="MapButton" mapName="Pearl" mapImage={pearl}/>
                <MapButton className="MapButton" mapName="Lotus" mapImage={lotus}/>
            </div>
        </div>
    );
}

export default Home;