import * as React from "react";
import styled from 'styled-components';
import wallet from './images/wallet.jpg';


const Styles = styled.div`
  .display-help {
    position: fixed;
    z-index: 9999;
    top: 34px;
    right: 5px;
  }

  .instructions {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9998;
    max-width: 600px;
    overflow-y: scroll;

    background: white;
    box-shadow: 2px 2px 10px 0;
  }

  .instruction-content {
    padding: 40px 50px;
  }

  .instructions ul {
    margin: 0;
    padding-left: 15px;
  }

  .eta {
    float: right;
  }

  .clock {
    height: 20px;
    width: 20px;
    margin-bottom: -4px;
  }

  .instructions .banner {
    width: 100%;
  }
`;

function Wallet({ spendCredit }) {
  
  const [showWallet, setWallet] = React.useState(false);
  const onClick = () => setWallet(!showWallet);
  const [credit, setCredit] = React.useState(20);
  const onRefillClick = () => {
    setCredit(20);
  }

  return (
    <Styles>
      <button className={`display-help ${showWallet? "" : "pulse"}`} onClick={onClick}>
        {showWallet ? "Hide Wallet" : "Show Wallet"}
      </button>

      {showWallet &&
        <div className="instructions">
          <div className="instruction-content">
            <img className="banner" src={wallet} />
            <h2>Balance</h2>

            <h3>Units <span className="eta"> {credit - spendCredit} $</span></h3>
            <button disabled={credit > 0 ? true : false} onClick={onRefillClick}>Refill</button>
          </div>
        </div>
      }
    </Styles>
  )
}

export default Wallet;
