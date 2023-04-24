import React  from 'react';
import boatMovingImg from "./images/movingBoat.gif";
import './styleActivity1.css'; 

function RideBoatComponent(props) {


  return (
    <>
        {props.rinding ? <img className='animated' src={boatMovingImg}/> : null}
    </>
   

  )


}


export default RideBoatComponent