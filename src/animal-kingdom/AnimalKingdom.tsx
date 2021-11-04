import React from 'react';
import animalKingdom from "../images/animal-kingdom.jpg";

function AnimalKingdom() {
  return (
    <div className="park animal-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={animalKingdom} className="map"/>
        </div>
      </div>
    </div>
  )
}

export default AnimalKingdom