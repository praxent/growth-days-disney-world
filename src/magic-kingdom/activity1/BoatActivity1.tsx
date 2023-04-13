import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const moveBoat = keyframes`
  0% {
    transform: translate(50px, 300px);
  }
  10% {
    transform: translate(50px, 340px);
  }
  20% {
    transform: translate(100px, 360px);
  }
  30% {
    transform: translate(150px, 240px);
  }
  40% {
    transform: translate(200px, 400px);
  }
  50% {
    transform: translate(300px, 500px);
  }
  60% {
    transform: translate(500px, 520px);
  }
  70% {
    transform: translate(650px, 500px);
  }
  80% {
    transform: translate(800px, 530px);
  }
  90% {
    transform: translate(650px, 530px);
  }
  100% {
    transform: translate(450px, 530px);
  }
`;

const Styles = styled.div`
  .boatImageRiding {
    position: absolute;
    animation: ${moveBoat} 8s forwards;
  }

  .boatImageNotRiding {
    position: absolute;
    top: 400px;
    transform: translate(0, 300);
  }

  .container {
    background-image: url('https://media.tenor.com/01yBiiXmcE4AAAAd/whale-jump-jumping-out-of-the-water.gif');

    background-repeat: no-repeat;

    background-size: cover;

    background-position: center;

    height: 100%;
  }
`;

function BoatActivity1(props: {
  isRiding: boolean;
  setIsRiding: React.Dispatch<React.SetStateAction<boolean>>;
  timerEnded: boolean;
  setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.timeLeft > 0) {
        props.setTimeLeft(props.timeLeft - 1);
      } else {
        props.setTimerEnded(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.timeLeft]);

  useEffect(() => {
    if (props.timerEnded) {
      props.setIsRiding(false);
    }
  }, [props.timerEnded]);

  const handleClick = () => {
    props.setIsRiding(true);
    props.setTimeLeft(7);
    props.setTimerEnded(false);
  };

  return (
    <Styles>
      <div className="container" style={{ height: 800 }}>
        <button onClick={() => handleClick()} style={{ position: 'absolute' }}>
          {props.isRiding ? 'Riding...' : 'Start Riding'}
        </button>
        <div>
          <img
            src="https://i0.wp.com/actividadestorrevieja.com/wp-content/uploads/2017/07/happy-banana-boat.png?resize=1080%2C426&ssl=1"
            width={400}
            className={`boatImage ${
              props.isRiding ? 'boatImageRiding' : 'boatImageNotRiding'
            }`}
          />
        </div>
      </div>
    </Styles>
  );
}

export default BoatActivity1;
