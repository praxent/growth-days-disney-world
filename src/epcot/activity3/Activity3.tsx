import React from 'react';
import styled from "styled-components";
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

function Activity3() {

  const navigate = useNavigate();

  const navigateToEarth = () => {
    navigate(CONFIG.ROUTE.EPCOT_EARTH);
  };

  const navigateToMars = () => {
    navigate(CONFIG.ROUTE.EPCOT_MARS);
  };

  const navigateToJupiter = () => {
    navigate(CONFIG.ROUTE.EPCOT_JUPITER);
  };

  const navigateToSaturn = () => {
    navigate(CONFIG.ROUTE.EPCOT_SATURN);
  };

  return (
    <Styles>
      <div className="container">
       <button onClick={navigateToEarth}>Visit Earth</button>
       <button onClick={navigateToMars}>Visit Mars</button>
       <button onClick={navigateToSaturn}>Visit Saturn</button>
       <button onClick={navigateToJupiter}>Visit Jupiter</button>
      </div>
    </Styles>
  )
}

export default Activity3