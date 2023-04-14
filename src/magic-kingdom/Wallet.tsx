import React, { Component, useState } from 'react';

const Wallet = <P extends object>(
  WrappedComponent: React.ComponentType<P & WalletProps>
) => {
  return class extends Component<P> {
    state = {
      balance: Number(localStorage.getItem('balance')) || 20,
    };

    updateBalanceValue = (newBalance: number) => {
      if (newBalance < 0) {
        return;
      }
      localStorage.setItem('balance', String(newBalance));
      this.setState({ balance: newBalance });
    };

    render() {
      return (
        <WrappedComponent
          balance={this.state.balance}
          updateBalanceValue={this.updateBalanceValue}
          {...(this.props as P)}
        />
      );
    }
  };
};

export interface WalletProps {
  balance: number;
  updateBalanceValue: (newBalance: number) => void;
}

export default Wallet;
