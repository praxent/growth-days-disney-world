import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import {UserContext} from '../../../captain-only/context';


const Styles = styled.div`
  color: black;

  .table {
    background-size: cover; 
    max-width: 900px;
    border-collapse: collapse; 
    width: 80%;
    height: 700px;
    margin: auto;
    font-weight: bold;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  }
  
  .table td,
  .table th {
    text-color: black;
    border: 1px solid black;
    padding: 8px;
    font-weight: bold; 
   }

   .table::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('https://www.disneyfoodblog.com/wp-content/uploads/2021/03/2021-wdw-blizzard-beach-reopening-lottawatta-lodge-2-1.jpg');
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}
`;

function Activity2() {
  const [menuArray, setData] = useState([]);
  const initialValue = { id: 0, name: "", description:"", type:"", quantity:0 };
  const [menu, setMenu] = useState([initialValue]);
  const context = useContext(UserContext);

  const {store} = context;

  const {userType} = store;

  console.log(userType);

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
          <table className='table'>
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
                    {(item.type === 'Adult' || item.type === 'Child') && userType === 'Adult' ? (
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