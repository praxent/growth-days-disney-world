import * as React from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import {CONFIG} from "./config";
import clock from "./images/clock.png";
import squirtGunGame from "./images/squirt-gun-game.jpg";
import boatRide from "./images/boat-ride.jpg";
import summitPlummet from "./images/summit-plummet.jpg";
import spaceshipEarth from "./images/spaceship-earth.jpg";

const Styles = styled.div`
  .display-help {
    position: fixed;
    z-index: 9999;
    top: 5px;
    right: 5px;
  }
  
  .instructions {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9998;
    max-width: 600px;
    overflow: scroll;
  
    background: white;
    box-shadow: 2px 2px 10px 0;
  }
  
  .instruction-content {
    padding: 40px 50px;
  }
  
  .instructions ul {
    margin: 0;
    padding-left: 15px;
  }
  
  .eta {
    float: right;
  }
  
  .clock {
    height: 20px;
    width: 20px;
    margin-bottom: -4px;
  }
  
  .instructions .banner {
    width: 100%;
  }
`;

function Instructions() {
  const { pathname } = useLocation();
  const [showHelp, setShowHelp] = React.useState(false);
  const onClick = () => setShowHelp(!showHelp);

  return (
    <Styles>
      <button className="display-help" onClick={onClick}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp &&
        <div className="instructions">
          <div className="instruction-content">
            {renderHelpDetails(pathname)}
          </div>
        </div>
      }
    </Styles>
  )
}

function renderHelpDetails(pathname : string) {
  let helpDetails;
  switch (pathname) {
    case CONFIG.ROUTE.ANIMAL_KINGDOM_A1:
      helpDetails = (
        <>
          <img className="banner" src={squirtGunGame} />
          <h2>Requirements</h2>

          <h3>Task 1: Squirt the targets at Fossil Fun Games <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Get an image of the ride's target (if possible) and display it</li>
            <li>Use React's useState hook to to set a variable called shooting to true or false</li>
            <li>When shooting is true, there should be some visual indication, like water hitting the target from a gun. </li>
          </ul>
          <ul>
          </ul>

          <h3>Task 2: Make the squirt gun a child component<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Refactor the squirt gun to be a child component of the Game component</li>
            <li>Pass the two variables from the use state hooks (value and setter) to the child component as props</li>
            <li>Ensure the functionality still works as it did before</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a></li>
            <li><a href="https://reactjs.org/docs/components-and-props.html" target="_blank">React props</a></li>
            <li><a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Inter-Component Communication</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.ANIMAL_KINGDOM_A2:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.ANIMAL_KINGDOM_A3:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.BLIZZARD_BEACH_A1:
      helpDetails = (
        <>
          <img className="banner" src={summitPlummet} />
          <h2>Requirements</h2>

          <h3>Task 1: Ride Summit Plummet at Blizzard Beach <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Get an image of the slide from Google and display it on the page</li>
            <li>Use React's useState hook to to set a variable called riding to true or false</li>
            <li>When riding is true, there should be some visual indication, like a person moving down the slide.</li>
          </ul>

          <h3>Task 2: Make the slide a child component<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Refactor the slide to be a child component of the Park component</li>
            <li>Pass the two variables from the use state hooks (value and setter) to the child component as props</li>
            <li>Ensure the functionality still works as it did before</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>
          
          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a></li>
            <li><a href="https://reactjs.org/docs/components-and-props.html" target="_blank">React props</a></li>
            <li><a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Inter-Component Communication</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.BLIZZARD_BEACH_A2:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.BLIZZARD_BEACH_A3:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.EPCOT_A1:
      helpDetails = (
        <>
          <img className="banner" src={spaceshipEarth} />
          <h2>Requirements</h2>

          <h3>Task 1: Ride Spaceship Earth at Epcot <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Get an image of the ride and display it on the page</li>
            <li>Use React's useState hook to to set a variable called riding to true or false</li>
            <li>When riding is true, there should be some visual indication, like the globe rotating.</li>
          </ul>

          <h3>Task 2: Make the globe a child component<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Refactor the globe to be a child component of the Park component</li>
            <li>Pass the two variables from the use state hooks (value and setter) to the child component as props</li>
            <li>Ensure the functionality still works as it did before</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a></li>
            <li><a href="https://reactjs.org/docs/components-and-props.html" target="_blank">React props</a></li>
            <li><a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Inter-Component Communication</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.EPCOT_A2:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.EPCOT_A3:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.MAGIC_KINGDOM_A1:
      helpDetails = (
        <>
          <img className="banner" src={boatRide} />
          <h2>Requirements</h2>

          <h3>Task 1: Ride the Pirates of the Caribbean boat at Adventureland <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Get an image of the ride's boat from Google and display it on the page</li>
            <li>use React's useState hook to to set a variable called riding to true or false</li>
            <li>When riding is true, there should be some visual indication, like moving the boat.</li>
          </ul>

          <h3>Task 2: Make the ride a child component<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Refactor the ride to be a child component of the Park component</li>
            <li>Pass the two variables from the use state hooks (value and setter) to the child component as props</li>
            <li>Ensure the functionality still works as it did before</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a></li>
            <li><a href="https://reactjs.org/docs/components-and-props.html" target="_blank">React props</a></li>
            <li><a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Inter-Component Communication</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.MAGIC_KINGDOM_A2:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    case CONFIG.ROUTE.MAGIC_KINGDOM_A3:
      helpDetails = (
        <>
          <h2>Requirements</h2>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>
          <h3>Task 1: TODO <span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>TODO</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add an additional creative feature or functionality. This will help make your case for the cash prize at the end!</li>
          </ul>

          <h2>Feature Spotlight</h2>
          <ul>
            <li><a href="TODO" target="_blank">TODO</a></li>
          </ul>
        </>
      );
      break;
    default:
      helpDetails = (
        <>
          This page doesn't have help
        </>
      );
      break;
  }
  return helpDetails
}

export default Instructions
