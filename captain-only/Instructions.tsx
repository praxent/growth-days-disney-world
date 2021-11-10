import * as React from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import {CONFIG} from "./config";
import clock from "./images/clock.png";

const Styles = styled.div`
  .display-help {
    position: fixed;
    z-index: 9999;
    top: 5px;
    left: 5px;
  }
  
  .instructions {
    position: fixed;
    top: 0;
    z-index: 9998;
    max-width: 600px;
  
    padding: 40px 50px 20px 50px;
    background: white;
    box-shadow: 2px 2px 10px 0;
  }
  
  .instructions {
    left: 0;
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
          {renderHelpDetails(pathname)}
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
          <h2>Requirements</h2>

          <h3>Task 1: Squirt the targets at Fossil Fun Games <span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Get an image of the ride's target (if possible) and display it</li>
            <li>Use React's useState hook to to set a variable called shooting to true or false</li>
            <li>When shooting is true, there should be some visual indication, like water hitting the target from a gun.</li>
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

          <h3>Task 1: Get the total number of available safari hats at the Outpost Shop<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Outpost Shop at Disney's Animal Kingdom.</li>
            <li>Make a call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to establish the maximum number of safari hats available.</li>
            <li>Use React's useState hook to set the resulting value as a state variable - initialized at 0, and updated once the useEffect hook returns a value</li>
            <li>The useState declaration's default value should be listed as a dependency in your useEffect hook!</li>
          </ul>
          <h3>Task 2: Allow for the selling of a safari hat<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" a safari hat. If a user clicks on this element, utilize the useState "setter" to decrease the safari hat value's count.</li>
            <li>Handle the decrement of the useState variable (EX: If variable has decreased from previous value, make an API call to update the number of available items) within the original useEffect hook, or a new useEffect declaration - what do you think is more efficient?</li>
            <li>Verify that the correct number of available safari hats is displayed to the user, and if the number = 0, disable the "purchase safari hat" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add the ability to refund a safari hat. This will help make your case for the cash prize at the end!</li>
            <li>Essentially the inverse of the purchasing logic - make an API call that increments the total safari hat count rather than decrements it. For example, maybe someone bought their hat without trying it on first - they like to live dangerously, though frequently it comes with consequences.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
            <li><a href="https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples" target="blank">Example of a POST call with the fetch API (use the React hooks example!)</a></li>
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

          <h3>Task 1: Get the total number of available ice creams at I.C. Expeditions<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of I.C. Expeditions at Disney's Blizzard Beach.</li>
            <li>Make a call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to establish the maximum number of ice creams available.</li>
            <li>Use React's useState hook to set the resulting value as a state variable - initialized at 0, and updated once the useEffect hook returns a value</li>
            <li>The useState declaration's default value should be listed as a dependency in your useEffect hook!</li>
          </ul>
          <h3>Task 2: Allow for the selling of an ice cream<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" an ice cream. If a user clicks on this element, utilize the useState "setter" to decrease the ice cream value's count.</li>
            <li>Handle the decrement of the useState variable (EX: If variable has decreased from previous value, make an API call to update the number of available items) within the original useEffect hook, or a new useEffect declaration - what do you think is more efficient?</li>
            <li>Verify that the correct number of available ice creams is displayed to the user, and if the number = 0, disable the "purchase ice cream" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add the ability to refund an ice cream. This will help make your case for the cash prize at the end!</li>
            <li>Essentially the inverse of the purchasing logic - make an API call that increments the total ice cream count rather than decrements it. For example, maybe someone's ice cream was handed to them already melted, and though they should have anticipated that, they're still furious.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
            <li><a href="https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples" target="blank">Example of a POST call with the fetch API (use the React hooks example!)</a></li>
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

          <h3>Task 1: Get the total number of available Lightyear Lemonades at the Space 220 Restaurant<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Space 220 Restaurant at Disney's Epcot Center.</li>
            <li>Make a call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to establish the maximum number of Lightyear Lemonades available - the restaurannt is really busy and only has a certain amount left.</li>
            <li>Use React's useState hook to set the resulting value as a state variable - initialized at 0, and updated once the useEffect hook returns a value</li>
            <li>The useState declaration's default value should be listed as a dependency in your useEffect hook!</li>
          </ul>
          <h3>Task 2: Allow for the selling of a Lightyear Lemonade<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" a Lightyear Lemonade. If a user clicks on this element, utilize the useState "setter" to decrease the Lightyear Lemonade value's count.</li>
            <li>Handle the decrement of the useState variable (EX: If variable has decreased from previous value, make an API call to update the number of available items) within the original useEffect hook, or a new useEffect declaration - what do you think is more efficient?</li>
            <li>Verify that the correct number of available Lightyear Lemonades is displayed to the user, and if the number = 0, disable the "purchase Lightyear Lemonade" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add the ability to refund a Lightyear Lemonade. This will help make your case for the cash prize at the end!</li>
            <li>Essentially the inverse of the purchasing logic - make an API call that increments the total Lightyear Lemonade count rather than decrements it. For example, maybe someone suddenly realized they hate Lightyear Lemonades, or their Lightyear Lemonade brought back horrific memories from their past.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
            <li><a href="https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples" target="blank">Example of a POST call with the fetch API (use the React hooks example!)</a></li>
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

          <h3>Task 1: Get the total number of available Sweet Tea Slushies at the Golden Oak Outpost<span className="eta"><img className="clock" src={clock} /> 15 min</span></h3>
          <ul>
            <li>Display an image of the Golden Oak Outpost at Disney's Magic Kingdom.</li>
            <li>Make a call (could be as simple as using 'fetch') to the mock API in React's useEffect hook to establish the maximum number of Sweet Tea Slushies available - the restaurannt is really busy and only has a certain amount left.</li>
            <li>Use React's useState hook to set the resulting value as a state variable - initialized at 0, and updated once the useEffect hook returns a value</li>
            <li>The useState declaration's default value should be listed as a dependency in your useEffect hook!</li>
          </ul>
          <h3>Task 2: Allow for the selling of a Sweet Tea Slushie<span className="eta"><img className="clock" src={clock} /> 30 min</span></h3>
          <ul>
            <li>Include a UI element for "selling" a Sweet Tea Slushie. If a user clicks on this element, utilize the useState "setter" to decrease the Sweet Tea Slushie value's count.</li>
            <li>Handle the decrement of the useState variable (EX: If variable has decreased from previous value, make an API call to update the number of available items) within the original useEffect hook, or a new useEffect declaration - what do you think is more efficient?</li>
            <li>Verify that the correct number of available Sweet Tea Slushies is displayed to the user, and if the number = 0, disable the "purchase Sweet Tea Slushie" UI element.</li>
          </ul>

          <h3>Task 3: Bonus!</h3>
          <ul>
            <li>If you finish early, add the ability to refund a Sweet Tea Slushie. This will help make your case for the cash prize at the end!</li>
            <li>Essentially the inverse of the purchasing logic - make an API call that increments the total Sweet Tea Slushie count rather than decrements it. For example, maybe someone realized their Sweet Tea Slushie was entirely too sweet - and the resulting sugar rush has driven them into a state of psychosis.</li>
          </ul>

          <h2>Feature Spotlight - defer to functional examples, not class examples!</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/hooks-effect.html#example-using-hooks" target="_blank">useEffect using React Hooks example</a></li>
            <li><a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState example</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Example of a GET call with the fetch API</a></li>
            <li><a href="https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples" target="blank">Example of a POST call with the fetch API (use the React hooks example!)</a></li>
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
