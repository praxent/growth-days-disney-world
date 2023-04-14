import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CrossCountryCreekImg from "./images/Cross-Country-Creek.jpg";
import MeltAwayBayImg from "./images/Melt-Away-Bay.jpg";
import RunoffRapidsImg from "./images/Runoff-Rapids.jpg";
import SnowStormersImg from "./images/Snow-Stormers.jpg";
import Waves from "./sounds/waves.mp3";
import CannonBall from "./sounds/cannonball.mp3";
import Draining from "./sounds/draining.mp3";
import Crickets from "./sounds/crickets.mp3";

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function CrossCountryCreek() {
 
  return (
      <React.Fragment>
        <img src={CrossCountryCreekImg} className="imgcontainer"/>;
      </React.Fragment> 
  )
  
}

let audio: HTMLAudioElement | null = null; // Variável para armazenar a instância do objeto Audio

function playSound(sound: any) {
  if (audio) {
    audio.pause(); // Pausa o áudio anterior, se houver
  }
  
  audio = new Audio(sound); // Cria uma nova instância do objeto Audio
  audio.play();
}

function MeltAwayBay() {
  return (
    <React.Fragment>
      <img src={MeltAwayBayImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}


function RunoffRapids() {
  return (
    <React.Fragment>
      <img src={RunoffRapidsImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}

function SnowStormers() {
  return (
    <React.Fragment>
      <img src={SnowStormersImg} className="imgcontainer"/>;
    </React.Fragment> 
)
}

function Activity3() {
  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);

  return (
    <Styles>

      <h1>Cameras</h1>
      <div className=".container">
        <div className="map-container3">
          <div className='crossCountryCreek'>
            <Link to="crossCountryCreek" className=''> 
            <button type="button" className='btn ' onClick={() => playSound(Waves)} >
              Cross Country Creek
            </button></Link>{" "}
          </div>
          <div className='meltAwayBay'>
            <Link to="meltAwayBay"> 
            <button type="button" className='btn' onClick={() => playSound(Crickets)} >
              Melt Away Bay
            </button></Link>{" "}
          </div>
          <div className='runoffRapids'>
            <Link to="runoffRapids"> 
            <button type="button" className='btn'onClick={() => playSound(Draining)} >
              Runoff Rapids
            </button></Link>{" "}
          </div>
          <div className='snowStormers'>
            <Link to="snowStormers"> 
            <button type="button" className='btn'onClick={() => playSound(CannonBall)} >
              Snow Stormers
            </button></Link>{" "}
          </div>
          <div className=''>
          </div>
          
              <Outlet />
          </div>
        </div>
      


     <Routes>
     
        <Route path="crossCountryCreek" element={<CrossCountryCreek />} />
        <Route path="meltAwayBay" element={<MeltAwayBay />} />
        <Route path="runoffRapids" element={<RunoffRapids />} />
        <Route path="snowStormers" element={<SnowStormers />} />

      
    </Routes>

    </Styles>
  )
}

export default Activity3