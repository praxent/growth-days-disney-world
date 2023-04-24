import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import Outlet from './Outlet';
import Wallet from '../Wallet';
import home from "./images/animal-kingdom.jpg";
import zebra from "./images/zebra.png";
import lion from "./images/lion.jpg";
import giraffe from "./images/giraffe.webp";
import chimpanzee from "./images/chimpanzee.jpg";

import lionSound from "./sounds/lion.mp3";
import zebraSound from "./sounds/zebra.mp3";
import giraffeSound from "./sounds/giraffe.mp3";
import chimpanzeeSound from "./sounds/chimpanzee.mp3";

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .btnContent {
    width:100%;
    background:none;
    border-radius:5px;
    box-shadow: 5px 10px 2px 0px grey;

  }

  .labels {
    display:inline;
    margin: 20px;
    padding:20px;
    text-align:center;

  }
  .animal {
    width:100%;
    z-index:-1 !important;
    position:relative;
  }

  .fence {
    background-image: repeating-linear-gradient(-90deg, #000,transparent 5px, transparent 45px, #000 45px, transparent 45px);
  }
`;

function Activity3(props) {

  const { counter, decrementCounter } = props;

  return (
    <Styles>
      <div className="container">
        Hello from Activity 3 Animal Kingdom
        <div className='btnContent'>
          <ul className='labels'>
            <li className='labels'><Link to="/animal-kingdom/activity3">Home</Link></li>
            {
               counter > 0 && 
               <>
                <li className='labels'><Link to="lion" onClick={decrementCounter}>Visit Lion</Link></li>
                <li className='labels'><Link to="zebra" onClick={decrementCounter}>Visit Zebra</Link></li>
                <li className='labels'><Link to="giraffe" onClick={decrementCounter}>Visit Giraffe</Link></li>
                <li className='labels'><Link to="chimpanzee" onClick={decrementCounter}>Visit Chimpanzee</Link></li>
                </>
            }
          </ul>

          <Routes>
            <Route path="/" element={<Outlet animal={home} sound={""} />} />
            <Route path="/lion" element={<Outlet animal={lion} sound={lionSound} />} />
            <Route path="/zebra" element={<Outlet animal={zebra} sound={zebraSound} />} />
            <Route path="/giraffe" element={<Outlet animal={giraffe} sound={giraffeSound} />} />
            <Route path="/chimpanzee" element={<Outlet animal={chimpanzee} sound={chimpanzeeSound} />} />
          </Routes>

        </div>
      </div>
    </Styles>
  )
}

export default Wallet(Activity3)