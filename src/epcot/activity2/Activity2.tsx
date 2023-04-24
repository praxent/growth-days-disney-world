import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  button {
    background-color: #0071c5;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Activity2() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/space_220')
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.log(error));
  }, []);

  const handleClick = (item) => {
    const updatedMenuData = menuData.map((menu) => {
      if (menu.id === item.id) {
        menu.quantity--;
      }
      return menu;
    });
    setMenuData(updatedMenuData);
  };

  return (
    <Styles>
      <div className="container">
        <img src="https://www.disneytouristblog.com/wp-content/uploads/2021/09/space-220-restaurant-epcot-disney-world-orlando-florida-264.jpg" alt="Space 220 Restaurant" />
        <h2>Menu of Drinks Available at Space 220 Restaurant</h2>
        <ul>
          {menuData.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Out of Stock'}</span>
              <button disabled={item.quantity === 0} onClick={() => handleClick(item)}>Purchase</button>
            </li>
          ))}
        </ul>
      </div>
    </Styles>
  );
}

export default Activity2;

