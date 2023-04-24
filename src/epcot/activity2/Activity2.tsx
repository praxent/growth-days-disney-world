import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import image from './images/space_restaurant.jpg';
import { getSpaceDrinks } from './helpers/GetSpaceDrinks'


const Styles = styled.div`  
  .container {
    width: 2000px;
    height: 2000px;
    background-image: url(${image});
  }

  ul {
    list-style-type: none;
    float: left;
  }
   
  li {
    height: 25px;
    margin-right: 100px;
    padding: 0 20px;
    font-weight: bold;
    color: #333;
  }
   
  li:last-child {
    border-right: none;
  }
   
  li button {
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    list-style: none;
    margin: 0;
    padding: 6px 11px;
    text-align: center;
    -webkit-transition: all 200ms;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
   
  li a:hover {
    color: #666;
  }
`;



function GridItem({ name, description, type, quantity }) {

  const [quantityValue, setQuantityValue] = useState(quantity);
  
  return (
    <>
     <ul>
        <li> {name} </li>
        <li> {description} </li>
        <li> {type} </li>
        <li> {quantityValue} </li>
        <li>
            <button disabled={quantityValue === 0 ? true : false} onClick={() => setQuantityValue(quantityValue - 1)}>Selling</button>
        </li>
      </ul>
    </>  
  );
}

function Grid({ drinks }) {
  return (
    <>
       {
          drinks.map((drink) => 
            (<GridItem key={ drink.name } name={drink.name} description={drink.description}
                       type={drink.type} quantity={drink.quantity}/>))
      }
    </>  
  );
}

function Activity2() {

  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    if(drinks.length > 0) return;
    getSpaceDrinks()
      .then(data => {setDrinks(data);})
      .catch(err => console.log(err));
  },[]);

  return (
    <Styles>
      <div className="container">
        <Grid drinks={drinks}/>
      </div>
    </Styles>
  )
}

export default Activity2


