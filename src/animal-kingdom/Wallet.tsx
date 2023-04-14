import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
    function NewComponent(props) {
        //render OriginalComponent and pass on its props.
        console.log(props);
        const [counter, setCounter] = useState(20);
        
        return <>
            <div>Money In The Wallet Avaialble : ${counter}</div>
            <OriginalComponent  name="LogRocket"
            counter={counter}
            decrementCounter={()=> setCounter((counter) => counter -1)} />
        </>;
    }
    return NewComponent;
};
export default UpdatedComponent;