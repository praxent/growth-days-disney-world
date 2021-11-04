import './App.css'
import * as React from "react";
import {Route, Routes} from "react-router-dom";

import Instructions from "./Instructions";
import DisneyWorld from "./disney-world/DisneyWorld";

import AnimalKingdom from "./animal-kingdom/AnimalKingdom";
import {default as AnimalKingdomActivity1} from "./animal-kingdom/activity1/Activity1";
import {default as AnimalKingdomActivity2} from "./animal-kingdom/activity2/Activity2";
import {default as AnimalKingdomActivity3} from "./animal-kingdom/activity3/Activity3";

import BlizzardBeach from "./blizzard-beach/BlizzardBeach";
import {default as BlizzardBeachActivity1} from "./blizzard-beach/activity1/Activity1";
import {default as BlizzardBeachActivity2} from "./blizzard-beach/activity2/Activity2";
import {default as BlizzardBeachActivity3} from "./blizzard-beach/activity3/Activity3";

import Epcot from "./epcot/Epcot";
import {default as EpcotActivity1} from "./epcot/activity1/Activity1";
import {default as EpcotActivity2} from "./epcot/activity2/Activity2";
import {default as EpcotActivity3} from "./epcot/activity3/Activity3";

import MagicKingdom from "./magic-kingdom/MagicKingdom";
import {default as MagicKingdomActivity1} from "./magic-kingdom/activity1/Activity1";
import {default as MagicKingdomActivity2} from "./magic-kingdom/activity2/Activity2";
import {default as MagicKingdomActivity3} from "./magic-kingdom/activity3/Activity3";

function App() {

  return (
    <>
      <Instructions />
      <Routes>
        <Route path={"/"} element={<DisneyWorld/>}/>

        <Route path={"/animal-kingdom"} element={<AnimalKingdom/>}/>
        <Route path={"/animal-kingdom/activity1"} element={<AnimalKingdomActivity1/>}/>
        <Route path={"/animal-kingdom/activity2"} element={<AnimalKingdomActivity2/>}/>
        <Route path={"/animal-kingdom/activity3"} element={<AnimalKingdomActivity3/>}/>

        <Route path={"/blizzard-beach"} element={<BlizzardBeach/>}/>
        <Route path={"/blizzard-beach/activity1"} element={<BlizzardBeachActivity1/>}/>
        <Route path={"/blizzard-beach/activity2"} element={<BlizzardBeachActivity2/>}/>
        <Route path={"/blizzard-beach/activity3"} element={<BlizzardBeachActivity3/>}/>

        <Route path={"/epcot"} element={<Epcot/>}/>
        <Route path={"/epcot/activity1"} element={<EpcotActivity1/>}/>
        <Route path={"/epcot/activity2"} element={<EpcotActivity2/>}/>
        <Route path={"/epcot/activity3"} element={<EpcotActivity3/>}/>

        <Route path={"/magic-kingdom"} element={<MagicKingdom/>}/>
        <Route path={"/magic-kingdom/activity1"} element={<MagicKingdomActivity1/>}/>
        <Route path={"/magic-kingdom/activity2"} element={<MagicKingdomActivity2/>}/>
        <Route path={"/magic-kingdom/activity3"} element={<MagicKingdomActivity3/>}/>

        <Route path="*" element={<DisneyWorld/>}/>
      </Routes>
    </>
  )
}

export default App
