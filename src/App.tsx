import './App.css'
import {Route, Routes} from "react-router-dom";
import AnimalKingdom from "./animal-kingdom/AnimalKingdom";
import BlizzardBeach from "./blizzard-beach/BlizzardBeach";
import Epcot from "./epcot/Epcot";
import MagicKingdom from "./magic-kingdom/MagicKingdom";
import DisneyWorld from "./disney-world/DisneyWorld";
import * as React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<DisneyWorld/>}/>
        <Route path={"/animal-kingdom"} element={<AnimalKingdom/>}/>
        <Route path={"/blizzard-beach"} element={<BlizzardBeach/>}/>
        <Route path={"/epcot"} element={<Epcot/>}/>
        <Route path={"/magic-kingdom"} element={<MagicKingdom/>}/>
        <Route path="*" element={<DisneyWorld/>}/>
      </Routes>
    </>
  )
}

export default App
