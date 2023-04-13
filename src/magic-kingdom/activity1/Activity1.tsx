import React, { useState, useEffect }  from 'react';
import styled from "styled-components";
import boatImg from "./images/boatpiratesofthecaribbean.webp";
import pirateAudio from "./audio/PiratesAudio.mp3";
import RideBoatComponent from './RideBoatComponent';

function Activity1() {
  const [audio] = useState(new Audio(pirateAudio));

  const gifStyle = {
    marginTop: "490px",
    marginLeft: "620px"

  };

  const [rinding, setRinding] = useState(false);
  const [buttonText, setButtonText] = useState('Lets Ride');

  function handleClick() {
    setButtonText(rinding ? 'Lets Ride' : 'Rinding');
    setRinding(!rinding);
    
  }

  useEffect(() => {
    if (rinding) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [rinding]);

  return (
    <>
    <div style={{ 
      backgroundImage: `url(${boatImg})`,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }}>
      <button onClick={handleClick}>{buttonText}</button>
      <div style={gifStyle}>
        <RideBoatComponent rinding={rinding}/>  
      </div>
        
      
    </div>
    </>
    

  )
}

export default Activity1