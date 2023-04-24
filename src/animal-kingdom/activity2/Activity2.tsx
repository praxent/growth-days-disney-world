import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import rainforestCafe from "./images/28088851.jpg";
import Wallet from '../Wallet';

const Styles = styled.div`
  color: blue;
  
  .container {

    margin: 0 auto;
  }
  .banner{
    width:100%;
  }
  .menu {
    width:100%;
    background: white;
    position:absolute;
    top:50px;
  }
  .table{
    margin:2%;
    margin: 0 auto;
    width:100%;
    border-collapse: collapse;
  }
  .tableHeader{
    background: #04A;
    color:white;
  }
  .tableBody{
    color:black;
  }
`;

function Activity2(props) {

  const [data, setData] = useState([])

  const { counter, decrementCounter } = props;

  const fetchData = () => {
    fetch("http://localhost:4000/rainforest_cafe")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }

  useEffect(() => {
    fetchData()

  }, [])

  const buy = (i) => {

    let { quantity } = i;

    const currentTodoIndex = data.findIndex((item) => item.id === i.id);
    const updatedTodo = { ...data[currentTodoIndex], quantity: parseInt(quantity) - 1 };
    const newData = [...data];
    newData[currentTodoIndex] = updatedTodo;
    setData(newData)
  }

  return (
    <Styles>

      <div className="container">
        Hello from Activity 2 Animal Kingdom
        <img className="banner" src={rainforestCafe} />
        <div className='menu'>

          <table className='table'>
            <thead className='tableHeader'>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Description</td>
                <td>Type</td>
                <td>Quantity</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody className='tableBody'>

              {data.length > 0 && (

                data.map((item, i) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {
                        item.quantity > 0 &&  counter > 0 ? <button key={item.id} onClick={() => {
                           buy(item)
                           decrementCounter()
                         } }>Buy</button> : 'Unavailable'
                      }
                    </td>
                  </tr>
                ))

              )}
            </tbody>
          </table>
        </div>
      </div>
    </Styles>
  )
}

export default Wallet(Activity2)