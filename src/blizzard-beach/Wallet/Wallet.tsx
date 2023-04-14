import React from "react";
import { useState } from "react";

function Wallet( WrappedComponent: any ) {
    return function() {
        const [balance, setBalance] = useState(20);
        return (
            <div className="balance">
                <p>Your Wallet: ${balance}</p>
                <WrappedComponent balance={balance} setBalance={setBalance} />
            </div>
        )
    }
}

export default Wallet;