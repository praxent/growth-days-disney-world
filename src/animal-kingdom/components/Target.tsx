import { RandomTarget } from "../activity1/RandomTarget";
import React from "react";
import targetImage from "../media/target.png";
import waterSplash from "../media/water_splash.png";

const Target = (props: {
    setNewPosition: React.Dispatch<React.SetStateAction<RandomTarget>>;
    target: RandomTarget;
    point: Boolean;
    setPoint: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const hitTheTarget = () => {
      props.setPoint(true)
      setTimeout(() => {
        props.setPoint(false)
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

  export { Target }