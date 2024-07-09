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
import { useEffect, useState } from "react";
import ShowMapsButton from "./ShowMapsButton/ShowMapsButton";



const maps = [
    { name: 'Abyss', image: abyss },
    { name: 'Haven', image: haven },
    { name: 'Bind', image: bind },
    { name: 'Split', image: split },
    { name: 'Fracture', image: fracture },
    { name: 'Icebox', image: icebox },
    { name: 'Breeze', image: breeze },
    { name: 'Sunset', image: sunset },
    { name: 'Ascent', image: ascent },
    { name: 'Pearl', image: pearl },
    { name: 'Lotus', image: lotus },
];

function Home() {

    const [displayMaps, setDisplayMaps] = useState(false);

    useEffect(() => {
        console.log('displayMaps state:', displayMaps);
    }, [displayMaps]);

    function showMaps() {
        console.log('Show Maps Button Clicked');
        setDisplayMaps(true);
    }


    return (
        <div className="Home">
            <Titles className="Titles"/>
            <ShowMapsButton className="ShowMapsButton" onClick={showMaps}/>
            <div className="Maps">
                {displayMaps && maps.map((map, index) => (
                    <MapButton
                        key={index}
                        className="MapButton"
                        mapName={map.name}
                        mapImage={map.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;