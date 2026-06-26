import { useEffect, useState } from "react";
import { useContext } from "react";
import "./defaultMiddleContent.css";
import userContext from "./userContext";
import generateRGB from "./generateRGB";

const DefaultMiddleContent = () => {
  const clientContext = useContext(userContext);
  const [ greetingColor, setGreetingColor ] = useState();
  const [ showMoreInfo, setShowMoreInfo ] = useState(false);
  const greeting = clientContext.greeting;

  useEffect(() => {
    let { colorR, colorG, colorB } = generateRGB();
    // let greetingColor = `color: rgb(${colorR}, ${colorG}, ${colorB})`
    setGreetingColor(`rgba(${colorR}, ${colorG}, ${colorB}, 0.6)`);
  },[greeting])

  function handleClick() {
    setShowMoreInfo(prev => !prev);
  }

  return (
    <div className="name-section-container">
      <div className="greeting" style={{color: greetingColor}}>{greeting}</div>
      <div className="name">
        <span className="letter-c">C</span>
        <span className="letter-h">H</span>
        <span className="letter-a">A</span>
        <span className="letter-r">R</span>
        <span className="letter-l">L</span>
        <span className="letter-i">I</span>
        <span className="letter-e">E</span>
      </div>
      <div className="name-shadow">
        <span className="shadow-c">C</span>
        <span className="shadow-h">H</span>
        <span className="shadow-a">A</span>
        <span className="shadow-r">R</span>
        <span className="shadow-l">L</span>
        <span className="shadow-i">I</span>
        <span className="shadow-e">E</span>
      </div>
      <div className="my-description-container">
        <span className={`material-symbols-outlined help-icon ${showMoreInfo ? "info-icon" : ""}`} onClick={handleClick}>
          {showMoreInfo ? 'info' : 'help'}
        </span>
        <div className="my-description">
          {showMoreInfo ? `Full-Stack Software Developer focused on creating engaging user experiences while building modern backend services using React, TypeScript, Node.js, Express, PostgreSQL, and Prisma ORM.` : `Full-Stack Software Developer building responsive, interactive web applications with React, TypeScript, and Node.js.`}
        </div>
      </div>
    </div>
  );
};

export default DefaultMiddleContent;
