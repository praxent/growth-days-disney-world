import React from 'react';

function Globe({ riding, setRiding}) {
  const handleRiding = () => {
    setRiding(!riding)
  }
  return (
    <div>
      <img className={ riding ? "image-rotating" : ""} src="https://ziggyknowsdisney.com/wp-content/uploads/2020/05/spaceship-earth-epcot-at-night.jpg"></img>
      <button className='riding-button' onClick={handleRiding}>{ riding ? "Disable Riding" : "Enable Riding"}</button>
    </div>
  );
}

export default Globe;