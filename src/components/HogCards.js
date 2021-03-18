import React from "react";
import HogObjects from "./HogObjects";
import hogs from "../porkers_data";

function HogCards() {
    const allHogs = hogs.map((hog) => {
        return <HogObjects name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']}/>
    })


    return (
        <div>
            {allHogs}
        </div>
        
    );
}

export default HogCards;