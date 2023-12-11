import "./App.css";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import userContext from "./components/userContext";
import DefaultMiddleContent from "./components/DefaultMiddleContent";

function App() {
  let [linkPreview, setLinkPreview] = useState(<DefaultMiddleContent />);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [greeting, setGreeting] = useState(`Hi! I'm`);
  let [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  let handleMouseMovement = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    setMouseCoordinates({ x: x, y: y });
  };

  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    document.addEventListener("mousemove", handleMouseMovement);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return (
    <userContext.Provider
      value={{
        windowWidth,
        setWindowWidth,
        windowHeight,
        setWindowHeight,
        linkPreview,
        setLinkPreview,
        greeting,
        setGreeting,
        mouseCoordinates,
      }}
    >
      <div className="main-container">
        {/* <div className="background-container">
          <FilterOne />
        </div> */}

        <Content />
      </div>
    </userContext.Provider>
  );
}

export default App;
