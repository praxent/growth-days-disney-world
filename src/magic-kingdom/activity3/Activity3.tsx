import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Harry Potter', cursive;
  font-size: 48px;
  color: #F5E5AB;
  text-shadow: 2px 2px 0px #000;
  margin: 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 300px;
    background-size: cover;
    transition: background-color 0.3s ease;
    cursor: pointer;
    margin: 10px;
    opacity: 0.85;
    z-index: 1;
  }

  .button-container:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .button-container:active {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const FullscreenImage = styled.img`
  object-fit: fill;
  width: 100vw;
  height: 100vh;
`;

function Activity3() {
    // @ts-ignore
    const handleClick = (event) => {
        console.log(`Button ${event.target.textContent} was clicked!`);
    };

    return (
        <div>
            <FullscreenImage
                src="https://e0.pxfuel.com/wallpapers/29/160/desktop-wallpaper-harry-potter-christmas-tip-christmas-at-hogwarts.jpg"
                alt="My pretty image"
            />

            <ButtonContainer>
                <div
                    className="button-container"
                    style={{backgroundImage: 'url(https://pm1.narvii.com/6648/172c29406d973a23901ea43a0a79040e5ba8cf74_hq.jpg)'}}
                    onClick={handleClick}
                >
                    <Title>Dark Spell</Title>
                </div>

                <div
                    className="button-container"
                    style={{backgroundImage: 'url(https://i0.wp.com/blogs.princeton.edu/cotsen/wp-content/uploads/sites/88/2021/05/goblet-dumbledore-scaled.jpg?ssl=1)'}}
                    onClick={handleClick}
                >
                    <Title>Fire Spell</Title>
                </div>

                <div
                    className="button-container"
                    style={{backgroundImage: 'url(https://i.pinimg.com/474x/10/bc/15/10bc150ec7e706fde64cd5f53d003685.jpg)'}}
                    onClick={handleClick}
                >
                    <Title>Water Spell</Title>
                </div>

                <div
                    className="button-container"
                    style={{backgroundImage: 'url(https://fantasytopics.com/wp-content/uploads/2022/02/Lockhart-in-the-Chamber-of-Secrets.jpg)'}}
                    onClick={handleClick}
                >
                    <Title>Lightning Spell</Title>
                </div>
            </ButtonContainer>
        </div>
    );
}

export default Activity3;
