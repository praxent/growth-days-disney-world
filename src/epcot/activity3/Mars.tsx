import React from 'react';
import styled from "styled-components";
import image  from './images/mars.jpg';
import audio from './audio/mars_sound.mp3';
import {useNavigate} from 'react-router-dom';
import {CONFIG} from '../../../captain-only/config';

const Styles = styled.div`
  .container {
    background-color: #21232A;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    height: 900px;
  }

  button {
    padding: 15px;
    font-size: 1.3rem;
    margin-top: 14em;
    margin-left: 7em;
  }
`;

function Mars() {

  const navigate = useNavigate();

  const navigateToActivity3 = () => {
    navigate(CONFIG.ROUTE.EPCOT_A3);
  };

  return (
    <Styles>
      <div className="container">
      <button onClick={navigateToActivity3}>Go back</button>
       <img src={image} width={300} height={300}/>
       <audio controls src={audio}></audio>
      </div>
    </Styles>
  )
}

export default Mars;