import React from 'react';
import styled from "styled-components";
import backgroundImage from "./images/lottawatta-lodge.png";
import { useState, useEffect } from 'react';
import Card from './components/Card.js';
import Wallet from '../Wallet/Wallet';

const Styles = styled.div`
  .container {
    max-width: 100%;
    margin: 0 auto;
    height: 1024px;
  }
`;

function Activity2Component( props: any) {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/lottawatta_lodge")
      .then(response => response.json())
      .then(data =>
        setMenu(data)
      );
  }, []);
  return (
    <Styles>
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <ul>
          {
            menu.map((item) =>
            (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                quantity={item.quantity}
                type={item.type}
                balance={props.balance}
                setBalance={props.setBalance} />
            )
            )
          }
        </ul>
      </div>
    </Styles>
  )
}
const Activity2 = Wallet(Activity2Component);

export default Activity2