import React, { useState } from "react";
import "./content.css";
import DefaultMiddleContent from "./DefaultMiddleContent";
import About from "../pages/About";
import Games from "../pages/Games";
import AppleClone from "../pages/AppleClone";
import WorldBankClone from "../pages/WorldBankClone";
import Cp24 from "../pages/Cp24";
import Nba from "../pages/Nba";
import Nickel from "../pages/Nickel";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

const Content = () => {
  //   let [hoveredLink, setHoveredLink] = useState("");
  let [linkPreview, setLinkPreview] = useState(<DefaultMiddleContent />);

  const getMidContent = (e) => {
    const value = e.target.getAttribute("data-value");
    // setHoveredLink(value);
    setLinkPreview(choice(value));
  };

  function choice(value) {
    switch (value) {
      case "about":
        return <About />;
      case "game":
        return <Games value={value} />;
      case "apple-clone":
        return <AppleClone value={value} />;
      case "worldbank-clone":
        return <WorldBankClone value={value} />;
      case "cp24":
        return <Cp24 value={value} />;
      case "nba":
        return <Nba value={value} />;
      case "nickel":
        return <Nickel value={value} />;
      case "home":
        return <DefaultMiddleContent />;
      case "repositories":
        window.open("https://github.com/Blynx03?tab=repositories", "_blank");
        break;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      case "default":
        return <DefaultMiddleContent />;
      default:
        return <DefaultMiddleContent />;
        break;
    }
  }

  return (
    <div className="content-container">
      <div
        className="top-left-container"
        onClick={getMidContent}
        data-value="default"
      >
        <div className="my-projects">Projects</div>
        <div
          className="projects-container"
          onClick={getMidContent}
          data-value="default"
        >
          <div className="projects">
            Cloned Sites
            <ul className="sub-container">
              <li
                className="apple-clone sub"
                onClick={getMidContent}
                data-value="apple-clone"
              >
                Apple Website
              </li>
              <li
                className="worldbank-clone sub"
                onClick={getMidContent}
                data-value="worldbank-clone"
              >
                World Bank Website
              </li>
            </ul>
          </div>
          <div className="projects" onClick={getMidContent} data-value="game">
            Game
            <ul className="sub-container">
              <li
                className="mastermind sub"
                onClick={getMidContent}
                data-value="game"
              >
                MasterMind
              </li>
            </ul>
          </div>
          <div
            className="projects"
            onClick={getMidContent}
            data-value="rest-api"
          >
            Rest APIs
            <ul className="sub-container">
              <li
                className="cp24 sub"
                onClick={getMidContent}
                data-value="cp24"
              >
                CP24 Style
              </li>
              <li className="nba sub" onClick={getMidContent} data-value="nba">
                NBA
              </li>
            </ul>
          </div>

          <div
            className="projects"
            onClick={getMidContent}
            data-value="other-react"
          >
            Other React app
            <ul className="sub-container">
              <li
                className="nickel sub"
                onClick={getMidContent}
                data-value="nickel"
              >
                15-Point Nickel
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="middle-container">{linkPreview}</div>
      <div
        className="bottom-right-container"
        onClick={getMidContent}
        data-value="default"
      >
        <div className="home" onClick={getMidContent} data-value="home">
          Home
        </div>
        <div className="about" onClick={getMidContent} data-value="about">
          About Me
        </div>
        <div
          className="my-repositories"
          onClick={getMidContent}
          data-value="repositories"
        >
          Repositories
        </div>
        <div className="resume" onClick={getMidContent} data-value="resume">
          Resume
        </div>
        <div className="contact" onClick={getMidContent} data-value="contact">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Content;
