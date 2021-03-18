import React from "react";
import piggy from "../assets/porco.png";
import HogObjects from  "./HogObjects"

const Nav = () => {


  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
    
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button>Sort by Name</button>
      <button>Sort by Weight</button>
    </div>
  );
};

export default Nav;
