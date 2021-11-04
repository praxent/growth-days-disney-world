import React from 'react';
import epcot from "../images/epcot.gif";
import {Link} from "react-router-dom";

function Epcot() {
  return (
    <div className="park epcot flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={epcot} className="map" height="900"/>
          <div className="labels">
            <Link to={"/epcot/activity1"}><span className="label pulse activity1">Activity 1</span></Link>
            <Link to={"/epcot/activity2"}><span className="label pulse activity2">Activity 2</span></Link>
            <Link to={"/epcot/activity3"}><span className="label pulse activity3">Activity 3</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Epcot