import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import withWallet from '../withWallet'

const Styles = styled.div`
  color: blue;

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    max-width: 400px;
    max-height: 400px;
  }

  .menu-wrapper {
    display:flex;
  }

  .menu-container {
    background: #3237c6;
    padding: 10px;
    color: white;
    margin: 5px;
    flex-basis: 20%;
  }

  .menu-title {
    color: orange;
  }

  .menu-description {
    color: red;
  }

  .menu-button {
    background: #00ffb8;
    cursor: pointer;
  }
`;

function Activity2({ handleBalance, isDisabled }) {
  const [menuOfDrinks, setMenuOfDrinks] = useState([]);

  const handlePurchase = (item) => {
    const updatedMenu = menuOfDrinks.map((menuItem) => {
      handleBalance()
      if (menuItem.id === item.id && item.quantity > 0) {
        return { ...menuItem, quantity: item.quantity - 1 }
      }
      return menuItem
    })
    setMenuOfDrinks(updatedMenu)
  }

  useEffect(() => {
    const getmenuOfDrinks = async () => {
      try {
        const url = `http://localhost:4000/space_220`
        const response = await fetch(url);
        const data = await response.json()
        setMenuOfDrinks(data)
        return data
      } catch (error) {
        console.error(error);
        throw error;
      }

    };
    getmenuOfDrinks()
  }, []);

  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Epcot
      </div>
      <div>
        <div className='image-container'>
          <img className='image' src="https://www.disneytouristblog.com/wp-content/uploads/2021/09/space-220-restaurant-epcot-disney-world-orlando-florida-264.jpg"></img>
        </div>

        <div className='menu-wrapper'>
          {menuOfDrinks.map((item) => {
            const { id, name, description, type, quantity } = item
            return (
              <div className='menu-container' key={id}>
                <h3 className='menu-title'>{name}</h3>
                <p>{description}</p>
                <div className='menu-description'>{type}</div>
                <div>{quantity}</div>
                <button className='menu-button' disabled={quantity === 0 | isDisabled} onClick={() => handlePurchase(item)}>Purchase</button>
              </div>
            )
          })}
        </div>
      </div>
    </Styles>
  )
}

export default withWallet(Activity2)