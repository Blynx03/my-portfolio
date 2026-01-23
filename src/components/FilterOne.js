import React, { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import "./filterOne.css";
import generateRGB from "./generateRGB";
import userContext from "./userContext";

const FilterOne = () => {
  const clientContext = useContext(userContext);
  const windowHeight = clientContext.windowHeight;
  const windowWidth = clientContext.windowWidth;
  const linkPreview = clientContext.linkPreview;
  const pixelOn = true;
  const [ isPixelOn, setIsPixelOn ] = useState(false);
  const refPixel = useRef();

  useEffect(() => {
    let shower = setInterval(() => {
      const pixelEl = document.createElement("div");

      // if (refPixel || (refPixel.current.contains(pixelEl) && pixelEl)) {
        // refPixel.current.removeChild(pixelEl);
        // refPixel.current.remove();
      // }

      let { colorR, colorG, colorB } = generateRGB();
      let animate = Math.floor(Math.random() * 11);
      let style = Math.floor(Math.random() * 2);
      let x = Math.floor(Math.random() * windowWidth);
      let y = Math.floor(Math.random() * windowHeight);
      let stylePixel = [
        {
          backgroundColor: `rgba(${colorR},${colorG},${colorB}, 0.2)`,
          position: "fixed",
          width: "1px",
          height: "1px",
          top: `${y}px`,
          left: `${x}px`,
          animation: `pixel${animate} 8000ms ease`,
        },
        {
          backgroundColor: `rgba(${colorG},${colorB},${colorR}, 0.2)`,
          position: "fixed",
          width: "10px",
          height: "10px",
          top: `${x}px`,
          left: `${y}px`,
          animation: `pixel${animate} 8000ms ease`,
        },
      ];

      if (style < 1) {
        pixelEl.innerText = ".";
      }
      Object.assign(pixelEl.style, stylePixel[style]);
      if (refPixel && !isPixelOn) {
        setIsPixelOn(true);
        refPixel.current.appendChild(pixelEl);
        setTimeout(() => {
          refPixel.current.removeChild(pixelEl);
        }, 4000);
      }
    }, 2000);
    return () => {
      if (!pixelOn) {
        setIsPixelOn(false);
        clearInterval(shower);
      }
    };
  }, [linkPreview, windowWidth, windowHeight]);

  return <div ref={refPixel} className="filter-one"></div>;
};

export default FilterOne;
