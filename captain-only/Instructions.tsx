import * as React from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import {CONFIG} from "./config";
import clock from "./images/clock.png";

import squirtGunGame from "./images/squirt-gun-game.jpg";
import boatRide from "./images/boat-ride.jpg";
import summitPlummet from "./images/summit-plummet.jpg";
import spaceshipEarth from "./images/spaceship-earth.jpg";

import libertyTreeTavern from "./images/liberty-tree-tavern.jpg";
import lottawattaLodge from "./images/lottawatta-lodge.jpg";
import rainforestCafe from "./images/rainforest-cafe.jpg";
import space220 from "./images/space-220.jpg";

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
    overflow-y: scroll;
  
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
          <img className="banner" src={rainforestCafe} />
          <h2>Requirements</h2>

          <h3>Task 1: Get the menu of drinks available at the Rainforest Cafe<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Rainforest Cafe at Disney's Animal Kingdom.</li>
            <li>Make a GET call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to receive the menu of drinks.</li>
            <li>Your mock API endpoint will be <pre>http://localhost:4000/rainforest_cafe</pre></li>
            <li>Use React's useState hook to set the returned data as a state variable - should you have multiple separate useState declarations, or save everything in one useState array? Who knows!</li>
          </ul>

          <h3>Task 2: Allow for the selling of different menu items<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" each of the items returned from the API. If a user clicks on this element, utilize the useState "setter" to decrease that item's available quantity.</li>
            <li>Verify that the correct quantity of each item is displayed to the user, and if the quantity = 0, disable that item's "purchase" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, there is a value on each menu item called "type" - this refers to whether or not the item has alcohol in it.</li>
            <li>Establish a way to consider whether or not a specific user ("customer") is above the legal drinking age (21). If they are under 21, they should not be allowed to purchase alcoholic items.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
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
          <img className="banner" src={lottawattaLodge} />
          <h2>Requirements</h2>

          <h3>Task 1: Get the menu of drinks available at the Lottawatta Lodge<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Lottawatta Lodge at Disney's Blizzard Beach.</li>
            <li>Make a GET call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to receive the menu of drinks.</li>
            <li>Your mock API endpoint will be <pre>http://localhost:4000/lottawotta_lodge</pre></li>
            <li>Use React's useState hook to set the returned data as a state variable - should you have multiple separate useState declarations, or save everything in one useState array? Who knows!</li>
          </ul>

          <h3>Task 2: Allow for the selling of different menu items<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" each of the items returned from the API. If a user clicks on this element, utilize the useState "setter" to decrease that item's available quantity.</li>
            <li>Verify that the correct quantity of each item is displayed to the user, and if the quantity = 0, disable that item's "purchase" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, there is a value on each menu item called "type" - this refers to whether or not the item has alcohol in it.</li>
            <li>Establish a way to consider whether or not a specific user ("customer") is above the legal drinking age (21). If they are under 21, they should not be allowed to purchase alcoholic items.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
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
          <img className="banner" src={space220} />
          <h2>Requirements</h2>

          <h3>Task 1: Get the menu of drinks available at the Space 220 Restaurant<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Space 220 Restaurant at Disney's Epcot Center.</li>
            <li>Make a GET call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to receive the menu of drinks.</li>
            <li>Your mock API endpoint will be <pre>http://localhost:4000/space_220</pre></li>
            <li>Use React's useState hook to set the returned data as a state variable - should you have multiple separate useState declarations, or save everything in one useState array? Who knows!</li>
          </ul>

          <h3>Task 2: Allow for the selling of different menu items<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" each of the items returned from the API. If a user clicks on this element, utilize the useState "setter" to decrease that item's available quantity.</li>
            <li>Verify that the correct quantity of each item is displayed to the user, and if the quantity = 0, disable that item's "purchase" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, there is a value on each menu item called "type" - this refers to whether or not the item has alcohol in it.</li>
            <li>Establish a way to consider whether or not a specific user ("customer") is above the legal drinking age (21). If they are under 21, they should not be allowed to purchase alcoholic items.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
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
          <img className="banner" src={libertyTreeTavern} />
          <h2>Requirements</h2>

          <h3>Task 1: Get the menu of drinks available at the Liberty Tree Tavern<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Liberty Tree Tavern at Disney's Magic Kingdom.</li>
            <li>Make a GET call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to receive the menu of drinks.</li>
            <li>Your mock API endpoint will be <pre>http://localhost:4000/liberty_tree</pre></li>
            <li>Use React's useState hook to set the returned data as a state variable - should you have multiple separate useState declarations, or save everything in one useState array? Who knows!</li>
          </ul>

          <h3>Task 2: Allow for the selling of different menu items<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" each of the items returned from the API. If a user clicks on this element, utilize the useState "setter" to decrease that item's available quantity.</li>
            <li>Verify that the correct quantity of each item is displayed to the user, and if the quantity = 0, disable that item's "purchase" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, there is a value on each menu item called "type" - this refers to whether or not the item has alcohol in it.</li>
            <li>Establish a way to consider whether or not a specific user ("customer") is above the legal drinking age (21). If they are under 21, they should not be allowed to purchase alcoholic items.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
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
    case CONFIG.ROUTE.ANIMAL_KINGDOM:
      if (CONFIG.PHASE >= 2) {
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
      } else {
        helpDetails = (
          <>
            Instructions will show up here during Phase 2
          </>
        );
      }
      break;
    case CONFIG.ROUTE.BLIZZARD_BEACH:
      if (CONFIG.PHASE >= 2) {
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
      } else {
        helpDetails = (
          <>
            Instructions will show up here during Phase 2
          </>
        );
      }
      break;
    case CONFIG.ROUTE.EPCOT:
      if (CONFIG.PHASE >= 2) {
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
      } else {
        helpDetails = (
          <>
            Instructions will show up here during Phase 2
          </>
        );
      }
      break;
    case CONFIG.ROUTE.MAGIC_KINGDOM:
      if (CONFIG.PHASE >= 2) {
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
      } else {
        helpDetails = (
          <>
            Instructions will show up here during Phase 2
          </>
        );
      }
      break;
    case CONFIG.ROUTE.ROOT:
      if (CONFIG.PHASE >= 3) {
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
      } else {
        helpDetails = (
          <>
            Instructions will show up here during Phase 3
          </>
        );
      }
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
