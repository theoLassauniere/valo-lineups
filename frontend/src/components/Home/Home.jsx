import "./Home.scss";
import MapButton from "../MapButton/MapButton";
import Titles from "./Titles/Titles";
import abyss from "../../assets/map-images/abyss.jpg";
import miniAbyss from "../../assets/map-minimaps/Abyss_minimap.png";
import haven from "../../assets/map-images/haven.jpg";
import miniHaven from "../../assets/map-minimaps/Haven_minimap.png";
import bind from "../../assets/map-images/bind.jpg";
import miniBind from "../../assets/map-minimaps/Bind-minimap.png";
import split from "../../assets/map-images/split.jpg";
import miniSplit from "../../assets/map-minimaps/Split_minimap.png";
import fracture from "../../assets/map-images/fracture.jpg";
import miniFracture from "../../assets/map-minimaps/Fracture_minimap.png";
import icebox from "../../assets/map-images/icebox.jpg";
import miniIcebox from "../../assets/map-minimaps/Icebox_minimap.png";
import breeze from "../../assets/map-images/breeze.jpg";
import miniBreeze from "../../assets/map-minimaps/Breeze_minimap.png";
import sunset from "../../assets/map-images/sunset.jpg";
import miniSunset from "../../assets/map-minimaps/Sunset_minimap.png";
import ascent from "../../assets/map-images/ascent.jpg";
import miniAscent from "../../assets/map-minimaps/Ascent_minimap.png";
import pearl from "../../assets/map-images/pearl.jpg";
import miniPearl from "../../assets/map-minimaps/Pearl_minimap.png";
import lotus from "../../assets/map-images/lotus.jpg";
import miniLotus from "../../assets/map-minimaps/Lotus_minimap.png";
import { useEffect, useState } from "react";
import ShowMapsButton from "./ShowMapsButton/ShowMapsButton";

const maps = [
    { name: 'Abyss', image: abyss, minimap: miniAbyss },
    { name: 'Haven', image: haven, minimap: miniHaven },
    { name: 'Bind', image: bind, minimap: miniBind },
    { name: 'Split', image: split, minimap: miniSplit },
    { name: 'Fracture', image: fracture, minimap: miniFracture },
    { name: 'Icebox', image: icebox, minimap: miniIcebox },
    { name: 'Breeze', image: breeze, minimap: miniBreeze },
    { name: 'Sunset', image: sunset, minimap: miniSunset },
    { name: 'Ascent', image: ascent, minimap: miniAscent },
    { name: 'Pearl', image: pearl, minimap: miniPearl },
    { name: 'Lotus', image: lotus, minimap: miniLotus },
];

function Home() {

    const [displayMaps, setDisplayMaps] = useState(false);
    const [displayHomeElements, setDisplayHomeElements] = useState(true);

    useEffect(() => {
        console.log('displayMaps state:', displayMaps);
    }, [displayMaps]);

    function showMaps() {
        console.log('Show Maps Button Clicked');
        setDisplayMaps(true);
        setDisplayHomeElements(false);
    }


    return (
        <div className="Home">
            {displayHomeElements &&
                <div className="homeElements">
                    <Titles className="Titles"/>
                    <ShowMapsButton className="ShowMapsButton" onClick={showMaps}/>
                </div>
            }
            <div className="Maps">
                {displayMaps && maps.map((map, index) => (
                    <MapButton
                        key={index}
                        className="MapButton"
                        mapName={map.name}
                        mapImage={map.image}
                        mapMinimap={map.minimap}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
