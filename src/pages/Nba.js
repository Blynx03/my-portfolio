import React from "react";
import LiveRepoLinks from "../components/LiveRepoLinks";
import "./nba.css";

const Nba = ({ value }) => {
  return (
    <article className="article-container">
      <div className="nba-header">API Demo - REST APIs</div>
      <p>
        This is a simple REST API project that provides information about
        basketball teams and some of their players. The API allows users to
        retrieve details about teams, their rosters, and individual player
        information.
      </p>
      <div className="nba-images-container">
        <img
          src="images/nba-main.png"
          className="nba-image1"
          alt="api demo website's main page"
        />
      </div>
      <p>
        This project leverages the following technologies to deliver a dynamic
        information -- HTML, CSS, Javascript and some Bootstrap.
      </p>
      <div className="nba-images-container">
        <img
          src="images/nba-player.png"
          className="nba-image2"
          alt="nba player's info page"
        />
      </div>

      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Nba;
