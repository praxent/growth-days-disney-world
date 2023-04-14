import React from 'react';
import styled from "styled-components";
import { Outlet, Route, Routes } from 'react-router';


const creekImage = "http://80.66.36.54:80/cgi-bin/faststream.jpg?stream=half&amp;fps=15&amp;rand=COUNTER"
const bayImage = "http://67.231.207.155/nph-jpeg.cgi?0&1681489114215465"
const rapidImage = "http://85.31.165.140/mjpg/video.mjpg?timestamp=1681491099634"
const snowImage = "http://72.138.175.115:80/mjpg/video.mjpg"

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity3() {
  return (
    <Styles>
      <div className="container">
      <div><h1>Melt Away Bad</h1></div>
        <table style={{ border: "1px solid #000", padding: "10px" }}>
          <thead>
            <tr>
              <th>Cross Country Creek</th>
              <th>Melt Away Bay</th>
              <th>Runoff Rapids</th>
              <th>Snow Stormers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="activity3/cross-country-creek"><img height={120} src={creekImage} /></a></td>
              <td><a href="activity3/cross-country-creek"><img height={120} src={bayImage} /></a></td>
              <td><a href="activity3/cross-country-creek"><img height={120} src={rapidImage} /></a></td>
              <td><a href="activity3/cross-country-creek"><img height={120} src={snowImage} /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Outlet />
    </Styles>
    
  )
}


function CrossCountryCreek() {
  return (
    <Styles>
      <div className="container">
      <div><h1>CrossCountryCreek</h1></div>
      <img height={400} src={creekImage} />
      </div>
    </Styles>
  )
}


function MeltAwayBay() {
  return (
    <Styles>
      <div className="container">
      <div><h1>Melt Away Bay</h1></div>
      <img height={400} src={bayImage} />
      </div>
    </Styles>
  )
}


function RunoffRapids() {
  return (
    <Styles>
      <div className="container">
      <div><h1>Runoff Rapids</h1></div>
      <img height={400} src={rapidImage} />
      </div>
    </Styles>
  )
}


function SnowStormers() {
  return (
    <Styles>
      <div className="container">
      <div><h1>Snow Stormers</h1></div>
      <img height={400} src={snowImage} />
      </div>
    </Styles>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Activity3 />}>
        <Route
          path="/cross-country-creek"
          element={<CrossCountryCreek />}
        />
      </Route>
    </Routes>
  );
}

export default App
