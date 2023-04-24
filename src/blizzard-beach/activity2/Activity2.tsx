import React, { useState } from 'react';
import { json } from 'stream/consumers';
import styled from "styled-components";
import LottawattaLodgePic from "../../../captain-only/images/lottawatta-lodge.jpg"

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

async function LottawattaLodgeMenu() {
  const response = await fetch("http://localhost:4000/lottawatta_lodge");
  const jsonData = await response.json();
  return jsonData;
}

function LottawattaLodgeImage(props) {
  return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img src={LottawattaLodgePic}></img></div>

}

const restaurantMenu = await LottawattaLodgeMenu()

function Activity2() {

  const [lastSale, setLastSale] = useState("")
  const [menu, sellItem] = useState(restaurantMenu)
  
  const sell = (id) => {
    sellItem(prevState => {
      return prevState.map(obj => {
        if (obj.id === id) {
          setLastSale(obj.name)
          return { ...obj, quantity:  obj.quantity - 1 };
        } else {
          return obj;
        }
      });
    });
  };

  //setMenu(await LottawattaLodgeMenu())

  return (
    <Styles>
      <div className="container">
      <LottawattaLodgeImage />
      <div><h2>Lottawatta Lodge Menu</h2></div>
        <table style={{ border: "1px solid #000", padding: "10px" }} title="Menu">
          <thead>
            <tr>
              <th>Category</th>
              <th>Dish</th>
              <th>Quantity</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item) => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td><strong>{item.name}</strong><br></br><span>{item.description}</span></td>
                  <td align='right'>{item.quantity}</td>
                  <td><button onClick={() => sell(item.id)} disabled={item.quantity <= 0}>{item.quantity > 0 ? "Sell" : "Out of stock"}</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div><h3>Last sale: {lastSale}</h3></div>
      </div>
    </Styles>
  )
}

export default Activity2