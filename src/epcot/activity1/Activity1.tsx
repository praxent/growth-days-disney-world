import React, { useState } from 'react';
import styled from 'styled-components';
import Wallet from '../Wallet';
import image from './images/spaceship_earth_epcot.jpg';

const Styles = styled.div`

  .container {
    width: 2000px;
    height: 2000px;
    background-image: url(${image});
  }
  
  .message {
    margin-left: 15.2rem;
    color: #FFFFFF;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 2.125rem;
    font-weight: 600;
    line-height: 1.5rem;
  }

  .button-ride {
    background-color: #111827;
    border: 1px solid transparent;
    border-radius: .75rem;
    box-sizing: border-box;
    margin-left: 15.2rem;
    margin-top: 14.2rem;
    color: #FFFFFF;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
    padding: .75rem 1.2rem;
    text-align: center;
    text-decoration: none #6B7280 solid;
    text-decoration-thickness: auto;
    transition-duration: .2s;
    transition-property: background-color,border-color,color,fill,stroke;
    transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
  }
  
  .button-ride:hover {
    background-color: #374151;
  }
  
  .button-ride:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  
  @media (min-width: 768px) {
    .button-ride {
      padding: .75rem 1.5rem;
    }
  }

`;

function RotationMessage({ status }) {
  const [isRotating, setIsRotating] = useState(status);
  return (
    <>
       <button className='button-ride' onClick={() => isRotating ? setIsRotating(false) : setIsRotating(true)}>Ride the globe</button>
        {isRotating ? <p className='message'>The globe is rotating</p> : <p className='message'>The globe is stopped</p>}
    </>  
  );
}

function Activity1() {
  return (
    <Styles>
      <Wallet spendCredit={1}/>
      <div className="container">
        <RotationMessage status={false}/>
      </div>
    </Styles>
  )
}

export default Activity1