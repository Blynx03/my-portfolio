import React from "react";
import "./liveRepoLinks.css";

const LiveRepoLinks = ({ value }) => {
  function handleClick(e) {
    let dataValue = e.target.getAttribute("data-value");
    let repoUrl = "";
    let demoUrl = "";
    switch (value) {
      case "apple-clone":
        repoUrl = "https://github.com/Blynx03/apple-clone";
        demoUrl = "https://blynx03.github.io/apple-clone/";
        break;
      case "worldbank-clone":
        repoUrl = "https://github.com/Blynx03/worldBank-clone";
        demoUrl = "https://blynx03.github.io/worldbank-clone/";
        break;
      case "game":
        repoUrl = "https://github.com/Blynx03/mastermind-v3";
        demoUrl = "https://blynx03.github.io/mastermind-v3/";
        break;
      case "cp24":
        repoUrl = "https://github.com/Blynx03/react-cp24";
        demoUrl = "https://blynx03.github.io/react-cp24/";
        break;
      case "nba":
        repoUrl = "https://github.com/Blynx03/api-demo";
        demoUrl = "https://blynx03.github.io/api-demo/";
        break;
      case "nickel":
        repoUrl = "https://github.com/Blynx03/nickel-react";
        demoUrl = "https://blynx03.github.io/nickel-react/";
        break;
      case "repositories":
        repoUrl = "";
        demoUrl = "";
        break;
      case "resume":
        repoUrl = "";
        demoUrl = "";
        break;
      case "contact":
        repoUrl = "";
        demoUrl = "";
        break;
      case "default":
      default:
        break;
    }
    dataValue === "repo"
      ? window.open(repoUrl, "_blank")
      : window.open(demoUrl, "_blank");
  }

  return (
    <div className="live-repo-container">
      <div
        className="site-link code-site-link"
        onClick={(e) => handleClick(e)}
        data-value="repo"
      >
        GitHub Repository
      </div>
      <div
        className="code-link code-site-link"
        onClick={(e) => handleClick(e)}
        data-value="demo"
      >
        Live Demo
      </div>
    </div>
  );
};

export default LiveRepoLinks;
