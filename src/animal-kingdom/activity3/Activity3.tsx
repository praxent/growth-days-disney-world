import React from "react";
import { Outlet, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  color: #b8531eed;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  color: #000;
  margin-bottom: 1rem;
`;

const CenteredContainer = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

function Lion() {
  return (
    <div>
      <img
        src="https://conteudo.imguol.com.br/c/entretenimento/1d/2018/02/05/cena-de-o-rei-leao-1994-1517875930747_v2_4x3.jpg"
        alt="Lion"
        width={500}
      />
    </div>
  );
}

function Giraffe() {
  return (
    <div>
      <img
        src="https://cdna.artstation.com/p/assets/images/images/043/857/492/large/serik-melman-03.jpg?1638442639"
        alt="Giraffe"
        width={500}
      />
    </div>
  );
}

function Zebra() {
  return (
    <div>
      <img
        src="https://assets.mycast.io/characters/marty-the-zebra-1608407-normal.jpg?1642260759"
        alt="Zebra"
        width={500}
      />
    </div>
  );
}

function Chimpanzee() {
  return (
    <div>
      <img
        src="https://www.jing.fm/clipimg/detail/353-3531294_abu-aladdin-characters.png"
        alt="Chimpanzee"
        width={500}
      />
    </div>
  );
}

function Zoo() {
  const playAudio = (audioFile: string | undefined) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  return (
    <div>
      <StyledTitle>Welcome to the Zoo</StyledTitle>

      <div>
        <div>
          <StyledLinks>
            <Link to="/animal-kingdom/activity3">Back to Zoo</Link>
            <Link
              to="lion"
              onClick={() =>
                playAudio("/src/animal-kingdom/activity3/media/lion_sound.mp3")
              }
            >
              Visit Lion
            </Link>
            <Link
              to="giraffe"
              onClick={() =>
                playAudio(
                  "/src/animal-kingdom/activity3/media/giraffe_sound.mp3"
                )
              }
            >
              Visit Giraffe
            </Link>
            <Link
              to="zebra"
              onClick={() =>
                playAudio("/src/animal-kingdom/activity3/media/zebra_sound.mp3")
              }
            >
              Visit Zebra
            </Link>
            <Link
              to="chimpanzee"
              onClick={() =>
                playAudio(
                  "/src/animal-kingdom/activity3/media/chimpanzee_sound.mp3"
                )
              }
            >
              Visit Chimpanzee
            </Link>
          </StyledLinks>
        </div>
      </div>

      <CenteredContainer>
        <Outlet />
      </CenteredContainer>
    </div>
  );
}

function Activity3() {
  return (
    <Routes>
      <Route path="/" element={<Zoo />}>
        <Route path="lion" element={<Lion />} />
        <Route path="giraffe" element={<Giraffe />} />
        <Route path="zebra" element={<Zebra />} />
        <Route path="chimpanzee" element={<Chimpanzee />} />
      </Route>
    </Routes>
  );
}

export default Activity3;
