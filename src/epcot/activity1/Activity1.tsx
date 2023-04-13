import React, { useState} from 'react';
import styled from "styled-components";
import Globe from "./Globe"

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .image-rotating {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 
        100% { -moz-transform: rotate(360deg); } 
    }
    @-webkit-keyframes spin { 
        100% { -webkit-transform: rotate(360deg); } 
    }
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
  }

   .riding-button {
    display: block;
  }
`;

function Activity1() {
  const [riding, setRiding] = useState(false);
  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Epcot
      </div>
      <Globe riding={riding} setRiding={setRiding} />
    </Styles>
  )
}

export default Activity1