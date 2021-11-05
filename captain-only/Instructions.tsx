import * as React from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import {JSXElementConstructor} from "react";

const Styles = styled.div`
  .display-help {
    position: fixed;
    z-index: 9999;
    top: 5px;
    left: 5px;
  }
  
  .instructions,
  .spotlight {
    position: fixed;
    top: 0;
    z-index: 9998;
  
    padding: 40px 50px 20px 50px;
    background: white;
    box-shadow: 2px 2px 10px 0;
  }
  
  .instructions {
    left: 0;
  }
  
  .spotlight {
    right: 0;
  }
  
  .instructions ul {
    margin: 0;
    padding-left: 15px;
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

function renderHelpDetails(pathname : string) : JSXElementConstructor {
  let helpDetails : JSXElementConstructor;
  switch (pathname) {
    case "/animal-kingdom/activity1":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>Effect Hooks</li>
            <li>Higher Order Component</li>
            <li>Inter-Component Communication</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>Requirement 1</li>
            <li>Requirement 2</li>
            <li>Requirement 3</li>
          </ul>
        </>
      );
      break;
    case "/animal-kingdom/activity2":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>AK2</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/animal-kingdom/activity3":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>AK3</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/blizzard-beach/activity1":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>BB1</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/blizzard-beach/activity2":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>BB2</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/blizzard-beach/activity3":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>BB3</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/epcot/activity1":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>E1</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/epcot/activity2":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>E2</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/epcot/activity3":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>E3</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/magic-kingdom/activity1":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>MK1</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/magic-kingdom/activity2":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>MK2</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </>
      );
      break;
    case "/magic-kingdom/activity3":
      helpDetails = (
        <>
          <h2>Instructions</h2>
          <ul>
            <li>MK3</li>
          </ul>
          <h2>Feature Spotlight</h2>
          <ul>
            <li>TODO</li>
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
