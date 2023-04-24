import React, { useState } from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #deaf57;
  position: relative;

  .container {
    color: #2d2dcb;
    font-size: 2rem;
    font-weight: 800;
    margin: 0.5rem;
  }
`;

const StyledButton = styled.button`
  height: 2rem;
  width: 4rem;
  color: #fff;
  background-color: #303d90;
  border: 0.5px solid #9e9668;
  border-radius: 4px;
`;

const WaterImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const waterGifs = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15a37b4c-5412-46ff-83de-9c5cbccb6141/d38n9j7-24e97c62-7527-47a0-b362-7dd20fb62c5f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1YTM3YjRjLTU0MTItNDZmZi04M2RlLTljNWNiY2NiNjE0MVwvZDM4bjlqNy0yNGU5N2M2Mi03NTI3LTQ3YTAtYjM2Mi03ZGQyMGZiNjJjNWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s3FP9t6ECPAsX2lZVpJ1wj5KThogfFYxjVPm2xrZj_A",
  "https://thumbs.gfycat.com/DearestGrotesqueHusky-size_restricted.gif",
  "https://i.gifer.com/BXib.gif",
  "https://media.tenor.com/RI0KYBE1CdkAAAAM/lee-know-stray-kids.gif",
  "https://i.pinimg.com/originals/11/39/5d/11395db3f965ee360d928aee47767322.gif",
];

function Activity1() {
  const [shooting, setShooting] = useState(false);
  const [gifIndex, setGifIndex] = useState(null);

  function handleClick() {
    setShooting(true);
    setGifIndex(Math.floor(Math.random() * waterGifs.length));
    setTimeout(() => {
      setShooting(false);
      setGifIndex(null);
    }, 4000);
  }

  return (
    <CenteredContainer>
      <div className="container">Fossil Fun Games</div>
      <div>
        <img
          src="https://farm9.static.flickr.com/8043/8079040367_ac90be5ab4_b.jpg"
          alt="Fossil Fun Games"
          width="1000"
          style={{
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />

        {shooting && (
          <WaterImage
            src={gifIndex != null ? waterGifs[gifIndex] : ""}
            alt="Squirtle Water Shooting"
            width="300"
          />
        )}
      </div>
      <StyledButton onClick={handleClick}>Shoot</StyledButton>
    </CenteredContainer>
  );
}

export default Activity1;
