import React from 'react';
import styled from "styled-components";
import { Link, Route, Routes, } from "react-router-dom";
import earthAudio from './assets/audio/earthAudio.mp3'
import marsAudio from './assets/audio/marsAudio.mp3'
import jupiterAudio from './assets/audio/jupiterAudio.mp3'
import saturnAudio from './assets/audio/saturnAudio.mp3'
import withWallet from '../withWallet'

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .planet-image {
    max-width: 500px;
    max-height: 300px;
  }
`;

function Activity3({ handleBalance, isDisabled }) {
  const listenEarth = new Audio(earthAudio);
  const listenMars = new Audio(marsAudio);
  const listenJupiter = new Audio(jupiterAudio);
  const listenSaturn = new Audio(saturnAudio);

  function resetAudios() {
    listenEarth.pause();
    listenMars.pause();
    listenJupiter.pause()
    listenSaturn.pause();
  }


  const playAudio = (audio) => {
    resetAudios();
    audio.play();
    handleBalance()
  };
  return (
    <Styles>
      <div className="container">
        Hello from Activity 3 Epcot
      </div>
      <Routes>
        <Route path="/" >
          <Route path="earth" element={<img className='planet-image' src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/msnbc/Components/Photo_StoryLevel/080708/080708-earth%20hmed-10a.jpg" alt="Planet Earth" />} />
          <Route path="mars" element={<img className='planet-image' src="https://d.newsweek.com/en/full/1762432/artists-impression-mars.jpg?w=1600&h=1600&q=88&f=1503b6ee34377abf40c45be2cc766247" alt="Planet Mars" />} />
          <Route path="jupiter" element={<img className='planet-image' src="https://cdn.britannica.com/66/155966-131-17B5B518/Jupiter.jpg" alt="Planet Jupiter" />} />
          <Route path="saturn" element={<img className='planet-image' src="https://www.funkidslive.com/wp-content/uploads/2022/10/2w-qwac0mzi.jpg" alt="Planet Saturn" />} />
        </Route>
      </Routes>
      <nav>
        <button disabled={isDisabled}>
          <Link to="earth" onClick={() =>
            playAudio(listenEarth)
          }>Visit Earth</Link>
        </button>
        <button disabled={isDisabled}>
          <Link to="mars" onClick={() =>
            playAudio(listenMars)
          }>Visit Mars</Link>
        </button>
        <button disabled={isDisabled}>
          <Link to="jupiter" onClick={() =>
            playAudio(listenJupiter)
          }>Visit Jupiter</Link>
        </button   >
        <button disabled={isDisabled}>
          <Link to="saturn" onClick={() =>
            playAudio(listenSaturn)
          }>Visit Saturn</Link>
        </button>
      </nav>
    </Styles>
  )
}

export default withWallet(Activity3)