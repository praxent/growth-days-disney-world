import React from 'react';
import blizzardBeach from "./images/blizzard-beach.jpg";
import {Link} from "react-router-dom";

function BlizzardBeach() {
  return (
    <div className="park blizzard-beach flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={blizzardBeach} className="map"/>
          <div className="labels">
            <Link to={"/blizzard-beach/activity1"}><span className="label pulse activity1">Activity 1</span></Link>
            <Link to={"/blizzard-beach/activity2"}><span className="label pulse activity2">Activity 2</span></Link>
            <Link to={"/blizzard-beach/activity3"}><span className="label pulse activity3">Activity 3</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlizzardBeach