import "./Titles.scss";
import { useEffect, useState } from "react";

function Titles() {

    const [displayWelcome, setDisplayWelcome] = useState(true);
    const [displaySelection, setDisplaySelection] = useState(false);

    useEffect(() => {
        const welcomeTimer = setTimeout(() => {
            setDisplayWelcome(false);
            setDisplaySelection(true);
        }, 5000);

        const selectionTimer = setTimeout(() => {
            setDisplaySelection(false);
        }, 10000);

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(selectionTimer);
        };
    }, []);

    return (
        <div className="titles">
            {displayWelcome && (
                <p className="welcome">
                    Welcome To Valorant Lineups !
                </p>
            )}
            {displaySelection && (
                <p className="selection">
                    Select the map you want to practice :
                </p>
            )}
        </div>
    );
}

export default Titles;