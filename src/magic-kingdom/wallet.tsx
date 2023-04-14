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
            balance: 25
        };

        setBalance = (newBalance: number) => {
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
