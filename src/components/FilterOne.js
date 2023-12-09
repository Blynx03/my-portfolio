import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import "./filterOne.css";
import generateRGB from "./generateRGB";
import userContext from "./userContext";

const FilterOne = () => {
  const clientContext = useContext(userContext);
  const windowHeight = clientContext.windowHeight;
  const windowWidth = clientContext.windowWidth;
  const linkPreview = clientContext.linkPreview;
  const [pixelOn, setPixelOn] = useState(true);
  const refPixel = useRef();

  useEffect(() => {
    let shower = setInterval(() => {
      const pixelEl = document.createElement("div");

      if (refPixel || (refPixel.current.contains(pixelEl) && pixelEl)) {
        // refPixel.current.removeChild(pixelEl);
        // refPixel.current.remove();
      }
      let { colorR, colorG, colorB } = generateRGB();
      let animate = Math.floor(Math.random() * 10);
      let style = Math.floor(Math.random() * 2);
      let x = Math.floor(Math.random() * windowWidth);
      let y = Math.floor(Math.random() * windowHeight);
      let stylePixel = [
        {
          color: `rgba(${colorR},${colorG},${colorB}, 0.5)`,
          position: "fixed",
          width: "1px",
          height: "1px",
          top: `${y}px`,
          left: `${x}px`,
          animation: `pixel${animate} 8000ms ease`,
        },
        {
          color: `rgb(${colorG},${colorB},${colorR})`,
          position: "fixed",
          width: "2px",
          height: "2px",
          top: `${x}px`,
          left: `${y}px`,
          animation: `pixel${animate} 8000ms ease`,
        },
      ];

      pixelEl.className = "pixel";
      pixelEl.innerText = ".";
      Object.assign(pixelEl.style, stylePixel[style]);
      if (refPixel) {
        refPixel.current.appendChild(pixelEl);
        setTimeout(() => {
          refPixel.current.removeChild(pixelEl);
        }, 4000);
      }
    }, 2000);
    return () => {
      if (!pixelOn) {
        clearInterval(shower);
      }
    };
  }, [linkPreview]);

  return <div ref={refPixel} className="filter-one"></div>;
};

export default FilterOne;
