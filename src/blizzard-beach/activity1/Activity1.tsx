import React, { useState } from 'react';
import styled from "styled-components";
import waterSlide from "./img/water-slide.gif";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function RidingImage(props) {
  return <img src={props.isRiding ? waterSlide : '' }></img>

}

function Activity1() {

  const [isRiding, setRiding] = useState(false)
  
  return (
    <Styles>
      <div className="container">
        <div>
          <p>Click to change Riding status. Current Status: "{isRiding.toString()}"</p>
          <button onClick={() => setRiding(!isRiding)} style={{ color: "white", backgroundColor: isRiding ? '#23C552' : '#F84F31'}}>
          { isRiding ? "" : "Not "} Riding
          </button>
        </div>
        <div>
          <br></br>
          <RidingImage
            isRiding={isRiding}
          />
        </div>
      </div>
    </Styles>
  )
}

export default Activity1