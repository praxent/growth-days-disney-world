import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Styles = styled.div`
  color: red;

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .globe {
    animation: ${({ riding }) => (riding ? spinAnimation : 'none')} 2s linear infinite;
    width: 200px;
    height: 200px;
    background-image: ${({ riding }) =>
      // riding ? 'url(/spaceship-earth-ride.jpg)' : 'url(/spaceship-earth.jpg)'};
      riding ? 'url(https://i.imgur.com/UdUQeIM.gif)' : 'url(https://i2.wp.com/thekingdominsider.com/wp-content/uploads/2017/06/spaceship-earth-epcot.jpg?fit=1000%2C1247&ssl=1)'};
    background-size: cover;
    margin: 0 auto;
    cursor: pointer;
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Activity1 = () => {
  const [riding, setRiding] = useState(false);

  const handleGlobeClick = () => {
    setRiding(!riding);
  };

  return (
    <Styles riding={riding}>
      <div className="container">
        <h1>Hello from Activity 1 Epcot</h1>
        <div className="globe" onClick={handleGlobeClick} />
      </div>
    </Styles>
  );
};

export default Activity1;

