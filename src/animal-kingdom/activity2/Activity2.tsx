import '../AnimalKingdom.css';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import rainForrestCafe from "../src/rain-forrest-cafe.png";
import { Drink } from './Drink';

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const DrinkView = (props: {drink: Drink; callback: (id: number) => void }) => {
  return (
    <div className="drink-view">
      <div>
        <p>{props.drink.name}</p>
        <p>Age: { props.drink.type == "Adult" ? "+18" : "Free" }</p>
        <p>Description: {props.drink.description}</p>
        <div style={{display:'inline'}}>
        <p>Quantity: {props.drink.quantity}</p>
        <button onClick={() => props.callback(props.drink.id)} disabled={props.drink.quantity == 0}>selling</button>
        </div>
      </div>
    </div>
  )
}

const MenuView = (props: {
  drinkList: Drink[];
  setDrinkList: React.Dispatch<React.SetStateAction<(Drink)[]>>
}) => {
  function listener(id: number) {
      const updatedList: Drink[] = props.drinkList.map((drink) => {
        if (drink.id == id && drink.quantity > 0) {
          drink.quantity -= 1
        }
        return drink;
      });
      props.setDrinkList(updatedList);
  }
  return (
    <div>
        {props.drinkList.map((drink, index) => {
          return <div key={index}><DrinkView drink={drink} callback={(drink) => listener(index)} /></div>
        })}
    </div>
  )
}

function Activity2() {
  const emptyList = [new Drink()];
  const [data, setData] = useState(emptyList);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${rainForrestCafe}')`
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:4000/rainforest_cafe")
      ).json();
      setData(data);
    }

    dataFetch();
  }, []);

  return (
    <Styles>
      <div className="container">
        <p>Hello from Activity 2 Animal Kingdom {data[0].name}</p>
        <MenuView drinkList={data} setDrinkList={setData}/>
      </div>
    </Styles>
  )
}

export default Activity2