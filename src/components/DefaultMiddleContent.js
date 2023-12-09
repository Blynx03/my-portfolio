import React from "react";
import { useEffect, useState, useContext } from "react";
import "./defaultMiddleContent.css";
import userContext from "./userContext";

const DefaultMiddleContent = () => {
  const clientContext = useContext(userContext);
  const greeting = clientContext.greeting;

  return (
    <div className="name-section-container">
      <div className="greeting">{greeting}</div>
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
      <div className="my-description">
        A Front-End (JavaScript/React) Web Developer. I shape the online web
        with lines of code.
      </div>
    </div>
  );
};

export default DefaultMiddleContent;
