import React, { useState } from 'react';

const withWallet = (WrappedComponent) => {
  const Wallet = () => {
    const [balance, setBalance] = useState(20)

    const handleBalance = () => {
      if (balance > 0) {
        setBalance(balance - 1)
      }
    }

    return (
      <div>
        <p>Wallet Balance: {balance} units</p>
        <WrappedComponent
          handleBalance={handleBalance}
          isDisabled={balance === 0}
        />
      </div>
    );

  }
  return Wallet;
}

export default withWallet;