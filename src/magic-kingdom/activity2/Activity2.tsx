import React, { useEffect } from 'react';
import styled from 'styled-components';
import Wallet, { WalletProps } from '../Wallet';
import { UserContextProps, UserContext } from '../../../captain-only/App';

const Styles = styled.div`
  .container {
    height: 700px;
    margin: 0 auto;
    background-image: url('https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/dining/magic-kingdom/liberty-tree-tavern/liberty-tree-tavern-gallery00.jpg?1666888235238');
  }

  .h1,
  div {
    color: white;
  }

  .button {
    float: right;
    background-color: green;
    color: white;
    border: none;
    padding: 4px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .button:hover {
    background-color: #006b8f;
  }

  .drink-list {
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 20px;
  }

  .drink-list h1 {
    font-size: 24px;
    margin-top: 0;
  }

  .drink-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .drink-list li {
    cursor: pointer;
    margin-bottom: 5px;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  .drink-list li:hover {
    background-color: #e6e6e6;
  }

  .drink-name,
  .drink-info {
    color: black;
  }

  .drink-name {
    font-weight: bold;
  }

  .drink-info {
    font-style: italic;
  }

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface Drinks {
  id: number;
  name: string;
  description: string;
  type: string;
  quantity: number;
}

function Activity2(props: WalletProps) {
  const [drinks, setDrinks] = React.useState<Drinks[]>();

  const userProps: UserContextProps = React.useContext(UserContext);

  useEffect(() => {
    const fetchDrinks = async () => {
      await fetch('http://localhost:4000/liberty_tree')
        .then((response) => response.json())
        .then((json) => setDrinks(json));
    };
    fetchDrinks();
  }, []);

  function handleDrinkClick(drink: Drinks): void {
    if (drink.type == 'Adult' && userProps.isAdult == false) {
      window.alert("Hmmm... You can't drink that child");
      return;
    }

    const newDrinks = [...(drinks ?? [])];

    const index = newDrinks.findIndex((d) => d.id === drink.id);

    newDrinks[index].quantity -= 1;
    props.updateBalanceValue(props.balance - 1);
    setDrinks(newDrinks);
  }

  return (
    <Styles>
      <div>
        <p style={{ color: 'black' }}>Wallet balance: {props.balance}</p>
        <div
          style={{
            marginTop: 50,
            marginBottom: 50,
            textAlign: 'center',
            fontSize: 24,
            color: 'black',
          }}
        >
          Welcome to Liberty Tree Tavern, are you ready for some drinks?
        </div>
        <div className="container">
          <div className="drink-list">
            <h1>Drinks for Sale</h1>
            <ul>
              {drinks?.map((drink, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (props.balance != 0) {
                      if (drink.quantity != 0) {
                        handleDrinkClick(drink);
                        return;
                      }
                      window.alert('Out of stock');
                    }
                  }}
                >
                  <span className="drink-name">{drink.name} </span>
                  <span className="drink-info">
                    ({drink.type}) - {drink.quantity} available
                  </span>
                  <ul></ul>
                  <span className="drink-info">{drink.description}</span>
                  <button className="button" disabled={drink.quantity === 0}>
                    {drink.quantity != 0 ? 'Sell' : 'Out of Stock'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Wallet(Activity2);
