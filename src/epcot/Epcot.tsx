import React from 'react';
import epcot from "../images/epcot.gif";

function Epcot() {
  return (
    <div className="park epcot flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={epcot} className="map" height="900"/>
        </div>
      </div>
    </div>
  )
}

export default Epcot