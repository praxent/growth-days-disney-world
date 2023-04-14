import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity2() {
  const [menuArray, setData] = useState([]);
  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);
  const image = 'https://www.disneyfoodblog.com/wp-content/uploads/2021/03/2021-wdw-blizzard-beach-reopening-lottawatta-lodge-2-1.jpg'


  function buyAction(item){    
    let updatedMenu = menuArray.map((menuItem) => {
      if (menuItem.id === item.id) {
          return { ...menuItem, quantity: item.quantity - 1 }
      }
      
      return menuItem
  })
  
  setData(updatedMenu)

  }

  useEffect(() => {
    fetch('http://localhost:4000/lottawatta_lodge')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
  })},[])

  return (
    <Styles>
      <div>
        <div>
          <img/>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Description</th>
                <th>For</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {menuArray.map(item => {
                return (
                  <tr key={item.id}>
                    {(item.type === 'Adult' || item.type === 'Child') ? (
                    <td>{item.quantity > 0 ? <button className="buttonMenu" onClick={() => buyAction(item)}>Buy</button> : ''}</td>
                     ) : (
                    <td>{item.quantity > 0 && item.type === 'Child' ? <button className="buttonMenu" onClick={() => buyAction(item)}>Buy</button> : ''}</td>
                     )}
                    <td>{ item.name }</td>
                    <td className='descriptionColumn'>{ item.description }</td>
                    <td>{ item.type }</td>
                    <td>{ item.quantity }</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>

          
          </div>

      </div>
    </Styles>
  )
}

export default Activity2