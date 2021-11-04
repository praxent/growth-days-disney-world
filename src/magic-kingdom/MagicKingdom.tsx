import React from 'react';
import magicKingdom from "../images/magic-kingdom.jpg";

function MagicKingdom() {
  return (
    <div className="park magic-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={magicKingdom} className="map"/>
        </div>
      </div>
    </div>
  )
}

export default MagicKingdom