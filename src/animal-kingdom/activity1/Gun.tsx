import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import gun from "./images/gun.jpg";
import water from "./images/water.mp3";
import useSound from 'use-sound';

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .shut{
    font-size:40px;
    position:absolute;
    display:inline;
    color:red;
    margin-top:-300px;
    margin-left:350px;
    cursor:pointer;
    text-align:center;
  }

  .gun{
    position:absolute;
    width:150px;
    margin-top:-400px;
    margin-left:350px;
  }
`;


function Gun(props) {

    const waterSound = new Audio(water);

    const { shooting, setShooting, counter, decrementCounter } = props;

    const shut = () => {
        shooting == false ? setShooting(true) : setShooting(false)
        
        if (shooting == false) {
            waterSound.play();
        }

        setTimeout(function(){  
            waterSound.pause() 
            setShooting(false) 
        }, 1000);
    }

    return (
        <Styles>
            <div className="container">
                <div className='water'>
                    {
                        shooting && <img className="gun" src={gun} />
                    }

                </div>
                {
                    counter > 0 && 
                
                    <button className="shut" onClick={() => {
                        shut()
                        decrementCounter()
                    }}>{shooting ? 'Stop' : 'Shooting'}</button>
                }
            </div>
        </Styles>
    )
}

export default Gun