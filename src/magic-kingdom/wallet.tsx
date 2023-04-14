import React, { Component } from 'react';

export interface WalletProps {
    balance: number;
    updateBalance: (newBalance: number) => void;
}

const withWallet = <P extends object>(
    WrappedComponent: React.ComponentType<P & WalletProps>
) => {
    return class extends Component<P> {
        state = {
            balance: Number(localStorage.getItem('walletBalance')) || 20
        };

        setBalance = (newBalance: number) => {
            localStorage.setItem('walletBalance', String(newBalance));
            this.setState({ balance: newBalance });
        };

        render() {
            return (
                <WrappedComponent
                    balance={this.state.balance}
                    updateBalance={this.setBalance}
                    {...this.props as P}
                />
            );
        }
    };
};

export default withWallet;
