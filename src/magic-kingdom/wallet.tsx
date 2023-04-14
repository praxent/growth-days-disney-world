import React, {Component} from 'react';

export interface WalletProps {
    balance: number;
    updateBalance: (newBalance: number) => void;
    isChild: boolean;
    setIsChild: (isChild: boolean) => void;
}

const withWallet = <P extends object>(
    WrappedComponent: React.ComponentType<P & WalletProps>
) => {
    return class extends Component<P> {
        state = {
            balance: Number(localStorage.getItem('walletBalance')) || 20,
            isChild: Boolean(localStorage.getItem('isChild')) || true,
        };

        setBalance = (newBalance: number) => {
            localStorage.setItem('walletBalance', String(newBalance));
            this.setState({balance: newBalance});
        };

        setIsChild = (isChild: boolean) => {
            localStorage.setItem('isChild', String(isChild));
            this.setState({isChild: isChild});
        }

        render() {
            return (
                <WrappedComponent
                    balance={this.state.balance}
                    updateBalance={this.setBalance}
                    isChild={this.state.isChild}
                    setIsChild={this.setIsChild}
                    {...this.props as P}
                />
            );
        }
    };
};

export default withWallet;
