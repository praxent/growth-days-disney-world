import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import slideImage from './images/slide-blizzard.png';
import kidSlide from './images/person-slide.png';
import { useSpring, animated } from 'react-spring';
import Wallet from '../Wallet/Wallet';


const Styles = styled.div`
  color: red;
  background-image: url(${slideImage});
  background-size: cover;
  height: 1024px;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  .animate {
    width: 200px;
    height: 200px;
    cursor: pointer;
    display: block;
  }
`;

function Activity1Components(props: any) {
  const [riding, setRiding] = useState(false);
  const animation = useSpring({
    from: { x: 800, y: 500 },
    to: riding ? { x: 800, y: 700 } : { x: 800, y: 500 },
  });
  function handleClick() {
    setRiding(!riding);
    props.setBalance(props.balance - 1);
  }

  return (
    <Styles>
        <button onClick={handleClick}>
        Toggle Me
      </button>
      <div>
        <animated.img
          src={kidSlide}
          onClick={handleClick}
          style={{ display: 'block', cursor: 'pointer', ...animation, width: '100px', height: '100px' }}
        />
      </div>
    </Styles>
  )
}

const Activity1 = Wallet(Activity1Components)
export default Activity1