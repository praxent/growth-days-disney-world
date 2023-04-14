import React, { ReactElement } from 'react';

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

  export { TargetArea };