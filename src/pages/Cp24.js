import React from "react";
import "./cp24.css";
import LiveRepoLinks from "../components/LiveRepoLinks";

const Cp24 = ({ value }) => {
  return (
    <article className="article-container">
      <div className="cp24-header">CP24 Style - REST APIs</div>
      <p>
        This multifunctional dashboard project provides users with a
        comprehensive platform similar to CP24 news format. This dashboard
        offers a wide range of features and is designed for desktop use.
      </p>
      <p>
        This project leverages the following technologies to deliver a dynamic
        and feature-rich dashboard -- HTML, CSS, Javascript and React.
      </p>

      <div className="cp24-images-container">
        <img
          src="images/cp24-main.png"
          className="cp24-image1"
          alt="cp24 website's main page"
        />
      </div>
      <h3>Features:</h3>
      <ul>
        <li>Real-Time Information - Date and Time</li>
        <li>User's IP Location</li>
        <li>Weather Forecast</li>
        <li>News</li>
        <li>Currency Exchange Rates</li>
        <li>Multimedia Integration - Youtube</li>
        <li>Advertisement</li>
        <li>Social Media Chat Simulation</li>
      </ul>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Cp24;
