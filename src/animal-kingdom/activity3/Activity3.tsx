import React, { useEffect, useState } from 'react';
import { AnimalSelector } from './animals/AnimalSelector';
import styled from "styled-components";
import monkeyImg from '../media/monkey.png';
import monkeySound from '../media/monkeySound.mp3';
import giraffeImg from '../media/Giraffe.png';
import giraffeSound from '../media/giraffeSound.mp3';
import zebraImg from '../media/Zebra.png';
import zebraSound from '../media/zebraSound.mp3';
import lionImg from '../media/Lion.png';
import lionSound from "../media/lionSound.mp3";
import { Animal } from './Animal';


const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const ParentComponent = () => {
  return (
    <div>
      <h1>sDfSDBFzsdgfb</h1>
      
    </div>
  )
}

const ChildComponent = () => {
  return (
    <div>
      <h1>sDfSDBFzsdgfb</h1>
    </div>
  )
}

function Activity3() {
  const [animal, changeAnimal] = useState(new Animal());

  useEffect(() => {
    const animalSound = new Audio(animal.sound)
    animalSound.play()
  })

  return (
    <Styles>
      <div className="container">
        <h1>Hello from Activity 3 Animal Kingdom</h1>
        <h2>Visit the Animals</h2>
        <AnimalSelector animal={new Animal("Lion", lionImg, lionSound)} changeAnimal={changeAnimal} />
        <AnimalSelector animal={new Animal("Zebra", zebraImg, zebraSound)} changeAnimal={changeAnimal} />
        <AnimalSelector animal={new Animal("Giraffe", giraffeImg, giraffeSound)} changeAnimal={changeAnimal} />
        <AnimalSelector animal={new Animal("Chimpanzee", monkeyImg, monkeySound)} changeAnimal={changeAnimal} />
        <img src={animal.img} style={{
          width: '400px',
          height: '400px',
          marginTop: '50px',
          visibility: `${animal.img == '' ? 'hidden' : 'visible'}`
        }} />
      </div>
    </Styles>
  )
}

export default Activity3