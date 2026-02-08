import { useEffect, useState, useContext, useRef } from "react";
import FilterOne from "./FilterOne";
import DefaultMiddleContent from "./DefaultMiddleContent";
import MasterMindGame from "../pages/MasterMindGame";
import Bubblitz from "../pages/Bubblitz";
import BattleShip from "../pages/BattleShip";
import AppleClone from "../pages/AppleClone";
import WorldBankClone from "../pages/WorldBankClone";
import Cp24 from "../pages/Cp24";
import Nba from "../pages/Nba";
import DartMaster from "../pages/DartMaster";
import Nickel from "../pages/Nickel";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Silya from "../pages/Silya";
import "./content.css";
import userContext from "./userContext";
import generateRGB from "./generateRGB";
import Rpsls from "../pages/Rpsls";
import FoodPicker from "../pages/FoodPicker";

const Content = () => {
  const clientContext = useContext(userContext);
  const { linkPreview, setLinkPreview, windowWidth, setGreeting, mouseCoordinates } = clientContext;
  const [isArrowUp, setIsArrowUp] = useState(false);
  let intervalId = useRef(null);
  let intervalId2 = useRef(null);
  let timeoutId = useRef(null);
  const projectsContainerRef = useRef(null);
  const middleContainerRef = useRef(null);
  const menuContainerRef = useRef(null);
  const spotlightRef = useRef(null);

  const getMidContent = (e) => {
    const value = e.target.getAttribute("data-value");

    if (windowWidth <= 550) {
      projectsContainerRef.current.style.visibility = "hidden";
      menuContainerRef.current.style.visibility = "visible";
      middleContainerRef.current.style.visibility = "visible";
    }
    middleContainerRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth',})
    setLinkPreview(choice(value));
  };

  useEffect(() => {
    let { x, y } = mouseCoordinates;
    let styleMouse = {
      position: "fixed",
      top: `${y - 50}px`,
      left: `${x - 50}px`,
      width: "100px",
      height: "100px",
      filter: "blur(60px)",
      borderRadius: "50%",
      color: "transparent",
      backgroundColor: "darkturquoise",
      animation: "spotlight 2000ms linear alternate",
    };

    if (document.querySelector(".spotlight")) {
      const prevSpotlight = document.querySelector(".spotlight");
      prevSpotlight.remove();
    }
    const spotlightEl = document.createElement("div");
    spotlightEl.className = "spotlight";
    spotlightEl.innerText = ".";
    Object.assign(spotlightEl.style, styleMouse);

    document.body.appendChild(spotlightEl);
  }, [mouseCoordinates]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      let { colorR, colorG, colorB } = generateRGB();
      const nameElement = document.querySelector(".name");
      const nameShadowElement = document.querySelector(".name-shadow");

      if (nameElement || nameShadowElement) {
        nameElement.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
        nameShadowElement.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
      }
    }, 8000);

    if (linkPreview) {
      if (linkPreview.type.name !== "DefaultMiddleContent") {
        clearInterval(intervalId.current);
        middleContainerRef.current.style.overflowY = "auto";
      } else {
        middleContainerRef.current.style.overflowY = "hidden";
      }
    }

    const changeGreeting = () => {
      setGreeting((prevGreeting) =>
        prevGreeting === `Hi! I'm` ? "...and" : `Hi! I'm`
      );
    };
    timeoutId.current = setTimeout(() => {
      changeGreeting();
      intervalId2.current = setInterval(changeGreeting, 3950);
    }, 2550);

    return () => {
      clearInterval(intervalId2.current);
      clearTimeout(timeoutId.current);
    };
  }, [linkPreview, setGreeting]);

  useEffect(() => {
    if (
      projectsContainerRef.current.style.visibility === "hidden" &&
      menuContainerRef.current.style.visibility === "hidden"
    ) {
      middleContainerRef.current.style.visibility = "visible";
      setLinkPreview(<DefaultMiddleContent />);
    }
  }, [windowWidth, setLinkPreview]);

  function choice(value) {
    switch (value) {
      case "about":
        return <About />;
      case "silya":
        return <Silya value={value} />;
      case "mastermind":
        return <MasterMindGame value={value} />;
      case "bubblitz":
        return <Bubblitz value={value} />;
      case "battleship":
        return <BattleShip value={value} />;
      case "rpsls":
        return <Rpsls value={value} />;
      case "apple-clone":
        return <AppleClone value={value} />;
      case "worldbank-clone":
        return <WorldBankClone value={value} />;
      case "cp24":
        return <Cp24 value={value} />;
      case "nba":
        return <Nba value={value} />;
      case "dartmaster":
        return <DartMaster value={value} />;
      case "food-picker":
        return <FoodPicker value={value} />;
      case "nickel":
        return <Nickel value={value} />;
      case "home":
        return <DefaultMiddleContent />;
      case "repositories":
        window.open("https://github.com/Blynx03?tab=repositories", "_blank");
        return <DefaultMiddleContent />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <DefaultMiddleContent />;
    }
  }

  function handleClick(value) {
    if (windowWidth <= 1000 && windowWidth >= 650) {
      switch (value) {
        case "projects":
          setIsArrowUp(!isArrowUp);
          projectsContainerRef.current.style.visibility =
            projectsContainerRef.current.style.visibility === "visible"
              ? "hidden"
              : "visible";
          menuContainerRef.current.style.visibility = "hidden";
          break;
        case "menu":
          menuContainerRef.current.style.visibility =
            menuContainerRef.current.style.visibility === "visible"
              ? "hidden"
              : "visible";
          projectsContainerRef.current.style.visibility = "hidden";
          break;
        default:
          return;
      }
    } else if (windowWidth < 650) {
      switch (value) {
        case "projects":
          setIsArrowUp(!isArrowUp);
          projectsContainerRef.current.style.visibility =
            projectsContainerRef.current.style.visibility === "hidden"
              ? "visible"
              : "hidden";
          break;
        case "menu":
          menuContainerRef.current.style.visibility =
            menuContainerRef.current.style.visibility === "visible"
              ? "hidden"
              : "visible";
          projectsContainerRef.current.style.visibility = "hidden";
          break;
        default:
          return;
      }
    }
  }

  useEffect(() => {
    if (windowWidth > 1000) {
      projectsContainerRef.current.style.visibility = "visible";
      menuContainerRef.current.style.visibility = "visible";
    }
    if (windowWidth >= 650 && windowWidth <= 1000) {
      menuContainerRef.current.style.visibility = "hidden";
      projectsContainerRef.current.style.visibility = "hidden";
      document.querySelector(".menu-icon-container").style.display = "block";
    }

    if (windowWidth < 650) {
      document
        .querySelectorAll(".sub-container")
        .forEach((el) => (el.style.display = "block"));
      document.querySelector(".menu-icon-container").style.display = "none";
      projectsContainerRef.current.style.visibility = "hidden";
      menuContainerRef.current.style.visibility = "visible";
    }
  }, [windowWidth]);

  return (
    <div ref={spotlightRef} className="content-container">
      <FilterOne />
      <div
        className="top-left-container"
        // onClick={getMidContent}
        data-value="default"
      >
        <div
          className="project-title-container"
          data-value="projects"
          onClick={(e) => handleClick(e.target.getAttribute("data-value"))}
        >
          <div className="my-projects" data-value="projects">
            PROJECTS
          </div>
          {!isArrowUp ? (
            <span
              className="material-symbols-outlined arrow"
              data-value="projects"
            >
              expand_more
            </span>
          ) : (
            <span
              className="material-symbols-outlined arrow"
              data-value="projects"
            >
              expand_less
            </span>
          )}
        </div>

        <div
          ref={projectsContainerRef}
          className="projects-container"
          data-value="default"
        >
          <div className="projects">
            E-Commerce
            <ul className="sub-container">
              <li
                className="silya-e-commerce sub"
                onClick={getMidContent}
                data-value="silya"
              >
                Silya - All About Chairs
              </li>
            </ul>
          </div>
          <div className="projects" onClick={getMidContent} data-value="game">
            Games
            <ul className="sub-container">
              <li
                className="mastermind sub"
                onClick={getMidContent}
                data-value="mastermind"
              >
                MasterMind
              </li>
              <li
                className="bubblitz sub"
                onClick={getMidContent}
                data-value="bubblitz"
              >
                Bubblitz
              </li>
              <li
                className="battleship sub"
                onClick={getMidContent}
                data-value="battleship"
              >
                BattleShip
              <em style={{color: 'yellow'}} onClick={getMidContent} data-value="battleship"> - Under Construction</em>
              </li>
              <li
                className="rpsls sub"
                onClick={getMidContent}
                data-value="rpsls"
              >
                Rock Paper Scissors Lizard Spock
              </li>
            </ul>
          </div>
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
                NBA <em style={{color: 'yellow'}}> - API Deprecated</em>
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
                className="dartmaster sub"
                onClick={getMidContent}
                data-value="dartmaster"
              >
                Dart Master Scorer
              </li>
               <li
                className="foodpicker sub"
                onClick={getMidContent}
                data-value="food-picker"
              >
                Food Picker
              </li>
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
{/* Middle Container */}
      <div ref={middleContainerRef} className="middle-container">
        {linkPreview}
      </div>
      <div
        className="bottom-right-container"
        // onClick={getMidContent}
        data-value="default"
      >
        <div className="menu-icon-container">
          <span
            className="material-symbols-outlined menu-icon"
            onClick={(e) => handleClick(e.target.getAttribute("data-value"))}
            data-value="menu"
          >
            menu
          </span>
        </div>
        <div ref={menuContainerRef} className="menu-container">
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
    </div>
  );
};

export default Content;
