import React from 'react';

function Globe({ riding, setRiding, isDisabled, handleBalance }) {
  const handleRiding = () => {
    setRiding(!riding)
    handleBalance()
  }
  return (
    <div>
      <img className={riding ? "image-rotating" : ""} src="https://ziggyknowsdisney.com/wp-content/uploads/2020/05/spaceship-earth-epcot-at-night.jpg"></img>
      <button disabled={isDisabled} className='riding-button' onClick={handleRiding}>{riding ? "Disable Riding" : "Enable Riding"}</button>
    </div>
  );
}

export default Globe;
