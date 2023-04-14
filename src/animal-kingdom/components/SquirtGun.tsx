import React from 'react';
import { RandomTarget } from '../activity1/RandomTarget';
import { TargetArea } from './TargetArea';
import { Target } from './Target';

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

  export { SquirtGun }