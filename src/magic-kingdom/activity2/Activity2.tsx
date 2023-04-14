import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import withWallet, {WalletProps} from "../wallet";


const images = [
    "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/dining/magic-kingdom/liberty-tree-tavern/liberty-tree-tavern-gallery00.jpg?1666888235238",
    "https://i0.wp.com/vegandisneyworld.com/wp-content/uploads/2014/05/oiuasdfd44.jpg",
    "https://allears.net/wp-content/uploads/2022/10/2022-wdw-mk-liberty-tree-tavern-full-spread-food-meal.jpg",
    "https://mission-food.com/wp-content/uploads/2018/05/Day5-MagicKingdom284-13-182928602928600x40029-1.jpg",
    "https://d3bo0mk5kk7egf.cloudfront.net/imgstore/elements/Liberty-Tree-Tavern.jpg;width=1200;height=630;mode=crop;scale=both;encoder=freeimage;quality=50;progressive=true",
    "https://www.disneytouristblog.com/wp-content/uploads/2014/09/liberty-tree-tavern-041.jpg",
];

interface SlideProps {
    isChanging: boolean;
}

const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.5s;
  opacity: ${props => props.isChanging ? 0 : 1};
`;

const Background = styled.div`
  background-color: rgba(139, 69, 19, 0.8); /* sets background color to brown with 80% opacity */
  background-image: linear-gradient(45deg, #8B4513 25%, transparent 25%),
  linear-gradient(-45deg, #8B4513 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #8B4513 75%),
  linear-gradient(-45deg, transparent 75%, #8B4513 75%);
  background-size: 50px 50px;
  background-position: 0 0, 0 25px, 25px -25px, -25px 0px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Content = styled.div`
  background-color: #F5DEB3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  overflow: auto;
  margin: 20px;
  max-height: 85vh;
  z-index: 1;
  opacity: 0.85;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

function Activity2({balance, updateBalance, setIsChild, isChild}: WalletProps) {
    const [items, setItems] = useState([]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [isImageChanging, setIsImageChanging] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageChanging(true);
            setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);

            const interval2 = setTimeout(() => {
                setIsImageChanging(false);
            }, 500);

            return () => clearTimeout(interval2);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:4000/liberty_tree');
            const data = await response.json();
            setItems(data);
        }

        fetchItems().then(r => console.log('done'));
    }, []);

    const handleSell = (id: any) => {
        if (balance < 1) {
            alert('You do not have enough money to buy this item!');
            return;
        }

        updateBalance(balance - 1);

        setItems(items.map(item => {
            if (item['id'] === id && item['quantity'] > 0) {
                item['quantity']--;
            }
            return item;
        }));
    };

    // @ts-ignore
    return (
        <Background>
            <Slide style={{backgroundImage: `url(${images[currentImageIndex]})`}} isChanging={isImageChanging}/>
            <Content>
                <h1>Experience Comfort and Style!</h1>
                <p>Explore our products that combine quality and aesthetics.</p>
                <p>You currently have {balance.toString()} coins spend</p>
                <button
                    onClick={() => setIsChild(false)}
                    style={{
                        backgroundColor: '#614caf',
                        border: 'none',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer'
                    }}
                >
                    I'm an adult
                </button>
                <button
                    onClick={() => setIsChild(true)}
                    style={{
                        backgroundColor: '#008CBA',
                        border: 'none',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer'
                    }}
                >
                    I'm a child
                </button>

                <ul>
                    {items.map(item => (
                        // @ts-ignore
                        isChild && item['type'].toString().toLowerCase() === "adult" ? null : (
                            <li key={item['id']}>
                                <h1>{item['name']}</h1>
                                <p>{item['description']}</p>
                                <p>Quantity: {item['quantity']}</p>
                                <Button onClick={() => handleSell(item['id'])}>Sell</Button>
                            </li>
                        )
                    ))}
                </ul>

            </Content>
        </Background>
    );
}

export default withWallet(Activity2);