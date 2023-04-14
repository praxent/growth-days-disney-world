import { useState } from 'react';
import './Card.css';

const Card = props => {
    const [quantity, setQuantity] = useState(props.quantity);
    function handleClick() {
        quantity > 0 ? setQuantity(quantity - 1) : 0;
        props.setBalance(props.balance - 1);
    }
    return (
        <li className="card-item">
            <div className="card card-item__content">
                <div className="card-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.description}</h3>
                    <p>{quantity}</p>
                </div>
                <div className="card-item__actions">
                    <button className="button" onClick={handleClick} disabled={props.balance === 0}>Buy</button>
                </div>
            </div>
        </li>
    );
};

export default Card;