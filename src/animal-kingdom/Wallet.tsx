import React, { useState } from "react";

type WalletBalanceProps = {
  balance: number;
  handleClick: () => void;
};

function withWalletBalance<T extends {}>(
  WrappedComponent: React.ComponentType<T & WalletBalanceProps>
) {
  return function WithWalletBalance(props: Omit<T, keyof WalletBalanceProps>) {
    const [balance, setBalance] = useState(20);

    function handleClick() {
      if (balance > 0) {
        setBalance(balance - 1);
      }
    }

    const wrappedProps = {
      balance,
      handleClick,
      ...props,
    } as T & WalletBalanceProps;

    return <WrappedComponent {...wrappedProps} />;
  };
}

export default withWalletBalance;
