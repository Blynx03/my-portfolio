import React from "react";
import LiveRepoLinks from "../components/LiveRepoLinks";
import "./nickel.css";

const Nickel = ({ value }) => {
  return (
    <article className="article-container">
      <div className="nickel-header">
        15-Point Nickel - Allergy Management App
      </div>
      <p>
        15 Nickel Point is an interactive app designed to help individuals with
        nickel allergies manage their condition. The app provides a
        comprehensive list of foods and their nickel content, allowing users to
        track their nickel intake in the form of "Nickel Points." The goal is to
        help users stay within a daily limit of 15 Nickel Points to minimize
        nickel exposure.
      </p>
      <div className="nickel-images-container">
        <img
          src="images/nickel-main.png"
          className="nickel-image1"
          alt="api demo website's main page"
        />
      </div>
      <p>
        This project leverages the following technologies to deliver a dynamic
        information -- HTML, CSS, Javascript and React.
      </p>

      <div className="nickel-images-container">
        <img
          src="images/nickel-search.png"
          className="nickel-image2"
          alt="nickel player's info page"
        />
      </div>
      <p>
        This app is still under construction, and some features may not be fully
        functional, including the authentication login buttons for Google and
        Facebook. To test the functionality, you can use the following
        credentials:
      </p>
      <ul>
        <li>Email: user@user.com</li>
        <li>Password: user</li>
      </ul>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Nickel;
