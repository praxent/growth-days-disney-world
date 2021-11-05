import * as React from "react";
import disneyWorld from "./images/disney-world.jpg";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";

function DisneyWorld() {
  return (
    <div className="park disney-world flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={disneyWorld} className="map"/>
          <div className="labels">
            <Link to={CONFIG.ROUTE.MAGIC_KINGDOM}><span className="label pulse magic-kingdom">Magic Kingdom</span></Link>
            <Link to={CONFIG.ROUTE.BLIZZARD_BEACH}><span className="label pulse blizzard-beach">Blizzard Beach</span></Link>
            <Link to={CONFIG.ROUTE.ANIMAL_KINGDOM}><span className="label pulse animal-kingdom">Animal Kingdom</span></Link>
            <Link to={CONFIG.ROUTE.EPCOT}><span className="label pulse epcot">Epcot</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisneyWorld