import React from "react";
import LiveRepoLinks from "../components/LiveRepoLinks";
import "./games.css";

const Games = ({ value }) => {
  return (
    <article className="article-container">
      <div className="game-header">MasterMind</div>
      <p>Welcome to the Mastermind Game! MY PRIDE AND JOY!</p>
      <p>
        This program offers a fun and challenging experience as you attempt to
        crack the secret code.
      </p>
      <p>
        {" "}
        The game consists of different levels, each with its own set of rules
        and challenges.
      </p>
      <div className="game-images-container">
        <img
          src="/images/mm-how-to.png"
          className="game-image1"
          alt="how to play"
        />
        <p>
          This project was built using HTML, CSS and plain (vanilla) Javascript.
          Though at the moment it is not coded to be responsive to mobile BUT
          playable.
        </p>
        <img
          src="/images/mm-game.png"
          className="game-image2"
          alt="game page"
        />
      </div>
      <p>
        Have fun and test your code-breaking skills in the Mastermind Game! Good
        luck!
      </p>
      <p className="game-note">
        NOTE: Turn your speakers on to make it more exciting!
      </p>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Games;
