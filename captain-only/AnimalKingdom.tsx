import React from 'react';
import animalKingdom from "./images/animal-kingdom.jpg";
import {Link} from "react-router-dom";

function AnimalKingdom() {
  return (
    <div className="park animal-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={animalKingdom} className="map"/>
          <div className="labels">
            <Link to={"/animal-kingdom/activity1"}><span className="label pulse activity1">Activity 1</span></Link>
            <Link to={"/animal-kingdom/activity2"}><span className="label pulse activity2">Activity 2</span></Link>
            <Link to={"/animal-kingdom/activity3"}><span className="label pulse activity3">Activity 3</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalKingdom