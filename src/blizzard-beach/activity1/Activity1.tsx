import React, { useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function SetupRide(riding : any, click : any) {
  return (
      <div className='Ride'>
      <button onClick={click}> { !riding ? 'Ride!' : 'Stop Riding' }</button>
      <br></br>
      { riding ? <img src='https://www.tripsavvy.com/thmb/BTc4GQVHwsIGHdwMMi83U6eU438=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blizzard-beach-Summit-Plummet-598e2e27845b3400108b20e3.jpg'>
      </img> : null }
      </div>
  );
}

const { forwardRef, useRef, useImperativeHandle } = React;


const Child = forwardRef((props, ref) => {

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

    getAlert() {
      alert("getAlert from Child");
    }

  }));

  return <h1>Hi</h1>;
});

function Activity1() {
  const [riding, updateRiding] = React.useState(false)
  const onClick = () => updateRiding(!riding)

  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Blizzard Beach
        <br></br>
        <SetupRide riding={riding} click={onClick} />
      </div>
    </Styles>
  )
}

function Activity2() {
  const [riding, updateRiding] = React.useState(false)
  const onClick = () => updateRiding(!riding)

  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Blizzard Beach
        <br></br>
       <div className='Ride'>
      <button onClick={onClick}> { !riding ? 'Ride!' : 'Stop Riding' }</button>
      <br></br>
      { riding ? <img src='https://www.tripsavvy.com/thmb/BTc4GQVHwsIGHdwMMi83U6eU438=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blizzard-beach-Summit-Plummet-598e2e27845b3400108b20e3.jpg'>
      </img> : null }
      </div>
      </div>
    </Styles>
  )
}


export default Activity2