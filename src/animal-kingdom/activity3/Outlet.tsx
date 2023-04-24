import React from 'react';

function Outlet({ animal, sound }) {

    if (sound) {
        const animalSound = new Audio(sound);
        animalSound.play();
        
        setTimeout(function(){  
            animalSound.pause() 
        }, 3000);
    }    

    return (
        <div className={!sound ? '' : 'fence' }>
            <img className="animal" src={animal} />
        </div>
    )
}

export default Outlet