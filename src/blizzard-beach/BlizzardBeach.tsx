import React from 'react';
import blizzardBeach from "../images/blizzard-beach.jpg";

function BlizzardBeach() {
  return (
    <div className="park blizzard-beach flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={blizzardBeach} className="map"/>
        </div>
      </div>
    </div>
  )
}

export default BlizzardBeach