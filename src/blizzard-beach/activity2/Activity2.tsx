import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

`;

const endpoint = 'http://localhost:4000/lottawatta_lodge';

function Activity2() {


  try {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

      fetch(endpoint)
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          console.log(result);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }


  return (
    <Styles>
      <div className="container">
        <img id="lottaLodge" src="/src/blizzard-beach/img/lottawatta_lodge.webp" alt="" />
      </div>
      <div className='row'>

      </div>
    </Styles>
  )
}


export default Activity2

