import { url } from 'inspector';
import React, { useState } from 'react';
import styled from "styled-components";
import image from '/src/blizzard-beach/img/summit-plummet-gallery00.jpeg';
import ridingImage from '/src/blizzard-beach/img/summit-plummet-riding.jpg';

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }
`;

function Activity1() {

  let [riding, setRiding] = useState(false);

  return (
    <Styles>
      <div className="container">
        <Ride riding={riding} />
        <button onClick={() => setRiding(!riding)}>{riding ? 'Stop!!!' : 'Ride!'}</button>
      </div>
    </Styles>
  )
}

function Ride(props) {
  return (
    <div>
      <img id="slide" src={props.riding ? ridingImage : image} alt="" />
      <p>{props.riding ? "Let's go!" : ""}</p>
    </div>
  )
}

export default Activity1