import React from 'react';
import magicKingdom from "./images/magic-kingdom.jpeg";
import {Link} from "react-router-dom";

function MagicKingdom() {
  return (
    <div className="park magic-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={magicKingdom} className="map"/>
          <div className="labels">
            <Link to={"/magic-kingdom/activity1"}><span className="label pulse activity1">Activity 1</span></Link>
            <Link to={"/magic-kingdom/activity2"}><span className="label pulse activity2">Activity 2</span></Link>
            <Link to={"/magic-kingdom/activity3"}><span className="label pulse activity3">Activity 3</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicKingdom