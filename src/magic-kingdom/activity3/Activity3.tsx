import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CONFIG } from '../../../captain-only/config';
import Wallet, { WalletProps } from '../Wallet';

const Styles = styled.div`
  color: green;

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  button {
    background-color: transparent;
    border: 2px solid black;
    color: black;
    font-size: 18px;
    padding: 12px 20px;
    margin: 10px;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: black;
    color: white;
  }

  #dark-spell-btn {
    border-color: #1c1c1c;
  }

  #dark-spell-btn:hover {
    background-color: #1c1c1c;
    color: white;
  }

  #fire-spell-btn {
    border-color: #ff4500;
  }

  #fire-spell-btn:hover {
    background-color: #ff4500;
    color: white;
  }

  #water-spell-btn {
    border-color: #00bfff;
  }

  #water-spell-btn:hover {
    background-color: #00bfff;
    color: white;
  }

  #lightning-spell-btn {
    border-color: #ffff00;
  }

  #lightning-spell-btn:hover {
    background-color: #ffff00;
    color: black;
  }
`;

function Activity3(props: WalletProps) {
  return (
    <Styles>
      <div className="container">
        <div
          style={{
            marginTop: 50,
            marginBottom: 50,
            textAlign: 'center',
            fontSize: 24,
            color: 'black',
          }}
        >
          Welcome to Magic Lessons, are you ready for some magic?
        </div>
        <div
          style={{
            marginTop: 50,
            marginBottom: 50,
            textAlign: 'center',
            fontSize: 24,
            color: 'black',
          }}
        >
          <Link to={'dark-spell'}>
            <button
              id="dark-spell-btn"
              onClick={() => props.updateBalanceValue(props.balance - 1)}
            >
              Dark Spell{' '}
            </button>
          </Link>
          <Link to={'fire-spell'}>
            <button
              id="fire-spell-btn"
              onClick={() => props.updateBalanceValue(props.balance - 1)}
            >
              Fire Spell
            </button>
          </Link>
          <Link to={'water-spell'}>
            <button
              id="water-spell-btn"
              onClick={() => props.updateBalanceValue(props.balance - 1)}
            >
              Water Spell
            </button>
          </Link>
          <Link
            to={'lightning-spell'}
            onClick={() => props.updateBalanceValue(props.balance - 1)}
          >
            <button id="lightning-spell-btn">Lightning Spell</button>
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Outlet />
        </div>
      </div>
    </Styles>
  );
}

export default Wallet(Activity3);
