import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
// @ts-ignore
import boatImage from './Pirate-Boat-Image.png';

const Styles = styled.div`

  .fullscreen-image {
    width: 100vw;
    height: 100vh;
  }

  .boat-image {
    position: absolute;
    width: 50vw;
    height: 50vh;
    z-index: 1;
    left: 50%;
    top: 20%;
    transform: translate(0%, 60%);
  }

  @media only screen and (max-width: 768px) {
    .boat-image {
      margin-top: 100px;
      width: 40vw;
      height: 40vh;
    }
  }

  .gif-animation {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 500px;
    z-index: 0;
  }
`;

function FullscreenImage() {
    return (
        <img
            className="fullscreen-image"
            src="https://static.vecteezy.com/system/resources/previews/002/676/689/non_2x/treasure-island-scene-at-daytime-with-pirate-kids-on-the-ship-free-vector.jpg"
            style={{objectFit: 'fill', width: '100%', height: '100%'}}
            alt="My pretty image"
        />
    );
}

interface BoatProps {
    position: { x: number; y: number };
}

function BoatImage({position}: BoatProps) {
    return (
        <img
            className="boat-image"
            src={boatImage}
            alt="Boat"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                display: 'block',
            }}
            // style={{
            //     left: `${position.x}px`,
            //     top: `${position.y}px`,
            //     display: "block",
            //     height: "500px",
            //     width: "500px",
            // }}
        />
    );
}

function GifAnimation() {
    return (
        <img src="https://media.tenor.com/nWx0rD5cDD4AAAAC/ocen.gif" className="gif-animation"/>
    );
}

const CenteredButton = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #2196F3;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function Activity1() {
    const [boatPosition, setBoatPosition] = useState({x: -100, y: 100});
    const [animationRunning, setAnimationRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (animationRunning) {
            intervalId = setInterval(() => {
                setBoatPosition(prevPosition => ({
                    x: prevPosition.x + 5,
                    y: prevPosition.y,
                }));


                if (boatPosition.x > window.innerWidth) {
                    stopAnimation();
                }

            }, 30);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [animationRunning, boatPosition]);

    const startAnimation = () => {
        setAnimationRunning(false);
        setBoatPosition({x: -100, y: 100});
        setAnimationRunning(true);
    };

    const stopAnimation = () => {
        setAnimationRunning(false);
        setBoatPosition({x: -100, y: 100});
    };

    return (
        <Styles>
            <div className="fullscreen-image">
                {animationRunning ? null : <FullscreenImage/>}
                {animationRunning ? <BoatImage position={boatPosition}/> : null}
                {animationRunning ? <GifAnimation/> : null}
                {animationRunning ? null : <CenteredButton onClick={startAnimation}>Raise Sails</CenteredButton>}
            </div>
        </Styles>
    );
}

export default Activity1;
