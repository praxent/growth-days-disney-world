import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WalletBalance from "../Wallet";

interface Data {
  description: string;
  id: number;
  name: string;
  quantity: number;
  type: string;
}

const CenteredContainer = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdf9f0;
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #ee6e00;
`;

const StyledText = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #ee6e00;
`;

const StyledDescription = styled.p`
  text-align: center;
  font-weight: 700;
  color: #ee6e00;
`;

const PurchaseButton = styled.button`
  width: "2rem";
  border-radius: 2px;
  background-color: #ee6e00;
  border: 1px solid greenyellow;
  border-radius: 8px;
  width: 100px;
  height: 30px;
`;

function Activity2({
  balance,
  handleClick,
}: {
  balance: number;
  handleClick: () => void;
}) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/rainforest_cafe");
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePurchase = (id: number) => {
    setData(
      data.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
            purchased: true,
          };
        }
        return item;
      })
    );
  };

  const makePurchases = (id: any) => {
    handleClick();
    handlePurchase(id);
  };

  return (
    <div>
      <CenteredContainer>
        <StyledTitle>Welcome To Rainforest Café!</StyledTitle>
        {balance > 0 ? (
          <p>Current balance: {balance}</p>
        ) : (
          <p>Balance is negative!</p>
        )}
        <img
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-rainforest-cafe-at-disneys-animal-kingdom-mark-andrew-thomas.jpg"
          alt=""
          width="700"
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <StyledText>{item.name}</StyledText>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <StyledDescription>{item.quantity}</StyledDescription>
                </td>
                <td>
                  <PurchaseButton
                    onClick={() => {
                      balance > 0 && makePurchases(item.id);
                    }}
                  >
                    Purchase
                  </PurchaseButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CenteredContainer>
    </div>
  );
}

export default WalletBalance(Activity2);
