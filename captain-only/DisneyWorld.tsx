import * as React from "react";
import disneyWorld from "./images/disney-world.jpg";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";
import styled from "styled-components";
import { createContext } from "react";

const Styles = styled.div`
  .label.magic-kingdom {
    left: 410px;
    top: -870px;
    padding: 10px 25px;
  }
  
  .label.blizzard-beach {
    left: 120px;
    top: -290px;
    padding: 10px 65px;
  }
  
  .label.animal-kingdom {
    left: -370px;
    top: -465px;
    padding: 10px 70px;
  }
  
  .label.epcot {
    left: 0px;
    top: -460px;
  }

  .classification {
    margin-top:100px;
    left:0px;
    position:relative;
    z-index:1000;
    height:200px;
    width:100px;
  }
`;

export const ThemeContext = createContext({
  mode: 'child',
  setMode: () => {},
});

function DisneyWorld() {

  const [mode, setMode] = React.useState('child');

  return (
    <Styles className="park disney-world flex-column">
      <ThemeContext.Provider value={{ mode, setMode }}>
        <Content />
      </ThemeContext.Provider>
    </Styles>
  )
}

function Content() {

  const {mode, setMode} = React.useContext(ThemeContext);

  return (
    
      <div className="flex-row">
        <div className="classification">
          <button onClick={()=> {   setMode('child') }}>Child</button>
          <button onClick={()=> {   setMode('adult') }}>Adult</button>
          Mode: {mode}
        </div>
        
        <div className="map-container">
          <img src={disneyWorld} className="map"/>
          <div className="labels">
            <Link to={CONFIG.ROUTE.MAGIC_KINGDOM}><span className="label pulse magic-kingdom">Magic Kingdom</span></Link>
            <Link to={CONFIG.ROUTE.BLIZZARD_BEACH}><span className="label pulse blizzard-beach">Blizzard Beach</span></Link>
            <Link to={CONFIG.ROUTE.ANIMAL_KINGDOM}><span className="label pulse animal-kingdom">Animal Kingdom</span></Link>
            <Link to={CONFIG.ROUTE.EPCOT}><span className="label pulse epcot">Epcot</span></Link>
          </div>
        </div>
      </div>
    
  )
}

export default DisneyWorld