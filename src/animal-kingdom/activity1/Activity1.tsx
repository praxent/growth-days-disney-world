import React, { useState } from 'react';
import styled from "styled-components";
import squirtGunGame from "./images/squirt_the_targets.jpg";
import Gun from './Gun';
import Wallet from '../Wallet';

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .shut{
    font-size:40px;
    position:absolute;
    display:inline;
    color:red;
    margin-top:-300px;
    margin-left:350px;
    cursor:pointer;
    text-align:center;
  }
`;

function Activity1(props) {

  const { counter, decrementCounter } = props;
  
  const [shooting, setShooting] = useState(false)

  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Animal Kingdom
        <img className="banner" src={squirtGunGame} />
       
        <Gun shooting={shooting} setShooting={setShooting} counter={counter} decrementCounter={decrementCounter}  />
      </div>
    </Styles>
  )
}

export default Wallet(Activity1)