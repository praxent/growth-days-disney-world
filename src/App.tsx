import disneyWorld from './disney-world.jpg'
import './App.css'
import {Route} from "react-router";
import {Link} from "react-router-dom";
import {AnimalKingdom} from "animal-kingdom/AnimalKingdom";
import {BlizzardBeach} from "blizzard-beach/BlizzardBeach";
import {Epcot} from "epcot/Epcot";
import {MagicKingdom} from "magic-kingdom/MagicKingdom";

function App() {
  return (
    <div class="app">
      <img src={disneyWorld} className="disney-world"/>
      <Link to={"/magic-kingdom"}><span className="label magic-kingdom">Magic Kingdom</span></Link>
      <Link to={"/blizzard-beach"}><span className="label blizzard-beach">Blizzard Beach</span></Link>
      <Link to={"/animal-kingdom"}><span className="label animal-kingdom">Animal Kingdom</span></Link>
      <Link to={"/epcot"}><span className="label epcot">Epcot</span></Link>

      <Route path={"/animal-kingdom"} component={AnimalKingdom} />
      <Route path={"/blizzard-beach"} component={BlizzardBeach} />
      <Route path={"/epcot"} component={Epcot} />
      <Route path={"/magic-kingdom"} component={MagicKingdom}/>
    </div>
  )
}

export default App
