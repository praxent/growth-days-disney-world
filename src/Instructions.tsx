import * as React from "react";
import { useLocation} from "react-router-dom";

function Instructions() {
  const { pathname } = useLocation();
  const [showHelp, setShowHelp] = React.useState(false);
  const onClick = () => setShowHelp(!showHelp);

  return (
    <>
      <button className="display-help" onClick={onClick}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp &&
        <div className="instructions">
          <h2>Instructions</h2>
          {pathname === "/animal-kingdom/activity1" &&
            <ul>
              <li>Requirement 1</li>
              <li>Requirement 2</li>
              <li>Requirement 3</li>
            </ul>
          }
        </div>
      }

      {showHelp &&
        <div className="spotlight">
          <h2>Feature Spotlight</h2>
          {pathname === "/animal-kingdom/activity1" &&
            <ul>
              <li>Effect Hooks</li>
              <li>Higher Order Component</li>
              <li>Inter-Component Communication</li>
            </ul>
          }
        </div>
      }
    </>
  )
}

export default Instructions
