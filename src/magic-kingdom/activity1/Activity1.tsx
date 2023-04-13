import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BoatActivity1 from './BoatActivity1';

function Activity1() {
  const [isRiding, setIsRiding] = useState(false);

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);

  return (
    <div>
      <div style={{ marginTop: 50, marginBottom: 50, textAlign: 'center', fontSize: 24 }}>
        Welcome to Pirates Of The Caribbean, are you ready for an insane
        experience?
      </div>
      <BoatActivity1
        isRiding={isRiding}
        setIsRiding={setIsRiding}
        timerEnded={timerEnded}
        setTimerEnded={setTimerEnded}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      ></BoatActivity1>
    </div>
  );
}

export default Activity1;
