import disneyWorld from "../images/disney-world.jpg";
import {Link} from "react-router-dom";

function DisneyWorld() {
  return (
    <>
      <img src={disneyWorld} className="map"/>
      <Link to={"/magic-kingdom"}><span className="label magic-kingdom">Magic Kingdom</span></Link>
      <Link to={"/blizzard-beach"}><span className="label blizzard-beach">Blizzard Beach</span></Link>
      <Link to={"/animal-kingdom"}><span className="label animal-kingdom">Animal Kingdom</span></Link>
      <Link to={"/epcot"}><span className="label epcot">Epcot</span></Link>
    </>
  )
}

export default DisneyWorld