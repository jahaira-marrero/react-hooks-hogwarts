import React, { useState } from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
// import hogs from "../porkers_data";




const images = {
    Babe: babe,
    Porkchop: porkchop,
    Cherub: cherub,
    "Piggy smalls": piggy_smalls,
    Trouble: trouble,
    Piglet: piglet,
    Peppa: peppa,
    "Truffle Shuffle": truffle_shuffle,
    Bailey: bailey,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Augustus Gloop": augustus_gloop
       
}

function HogObjects(props) {
    const [isHidden, setIsHidden] = useState(true)
    
    function AboutMe() {
      
        return(<section>
            <p>Specialty: {props.specialty}</p>
            <p>Weight: {props.weight}lbs</p>
            <p>Highest Medal: {props.medal}</p>
            <p>Am I greased? {props.greased ? "Grease, grease, baby!" : "No grease over here!"}</p>
        </section>)
    }
    function handleClick() {
        setIsHidden(!isHidden);
        }

    return (
        <div className="pigTile" id={props.id}>
             <h2> {props.name} </h2>
            <button onClick={handleClick}>{isHidden ? "About Me" : "Show Less"}</button>
            {isHidden ? null : AboutMe()}
            <img src={images[props.name]} alt={props.name} />
        </div>
    );
}

export default HogObjects;