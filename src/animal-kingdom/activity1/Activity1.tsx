import './Activity1.css';
import React, { Children, ReactChildren, ReactElement, useEffect, useState } from 'react';
import styled from "styled-components";
import fossilFun from "../src/fossil-fun.png";
import targetImage from "../src/target.png";
import waterSplash from "../src/water_splash.png";
import waterSound from "../src/water-filled.mp3";
import { RandomTarget } from './RandomTarget';

const waterAudio = new Audio(waterSound);

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  };
`;

const SquirtGun = (props: {
  setNewPosition: React.Dispatch<React.SetStateAction<RandomTarget>>;
  target: RandomTarget;
  point: Boolean;
  setPoint: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <TargetArea width={props.target.screenWidth} height={props.target.screenHeight}>
        <Target
          target={props.target}
          setNewPosition={props.setNewPosition}
          point={props.point}
          setPoint={props.setPoint} />
      </TargetArea>
  )
}

const TargetArea = (props: {
  children: ReactElement;
  width: number,
  height: number
}) => {
  return (
    <div style={{
      width: props.width,
      height: props.height }}>
        {props.children}
    </div>
  )
}

const Target = (props: {
  setNewPosition: React.Dispatch<React.SetStateAction<RandomTarget>>;
  target: RandomTarget;
  point: Boolean;
  setPoint: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const hitTheTarget = () => {
    props.setPoint(true)
    waterAudio.play();
    setTimeout(() => {
      props.setPoint(false)
      waterAudio.pause();
      props.setNewPosition(
        new RandomTarget(
          props.target.screenWidth,
          props.target.screenHeight,
          props.target.targetSize
        ))
    }, 1000)
  }

  return (
    <div id="container"
      onClick={hitTheTarget}
      style={{
        marginLeft: `${props.target.xPosition}px`,
        marginTop: `${props.target.yPosition}px`,
        zIndex: 300 }}>
      <div id="navi">
        <img src={targetImage}
          height= {props.target.targetSize}
          width= {props.target.targetSize} />
      </div>
      <div id="infoi">
        <img src = {waterSplash}
          height = { props.point ? props.target.targetSize : "0px" }
          width = { props.point ? props.target.targetSize : "0px" } />
      </div>
    </div>
  )
}

function Activity1() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${fossilFun}')`
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
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