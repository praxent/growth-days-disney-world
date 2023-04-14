import '../AnimalKingdom.css';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import fossilFun from "../media/fossil-fun.png";
import waterSound from "../media/water-filled.mp3";
import { RandomTarget } from './RandomTarget';
import { SquirtGun } from '../components/SquirtGun';

const waterAudio = new Audio(waterSound);

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  };
`;

function Activity1() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${fossilFun}')`
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    point ? waterAudio.play() : waterAudio.pause();
  })

  const screenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const screenHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const [target, newPosition] = useState(new RandomTarget(screenWidth, screenHeight, 240, true));
  const [point, setPoint] = useState(false)
  
  return (
    <Styles>
      <SquirtGun point={point} setPoint={setPoint} target={target} setNewPosition={newPosition} />
    </Styles>
  )
}

export default Activity1