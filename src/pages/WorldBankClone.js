import React from "react";
import "./worldBankClone.css";
import LiveRepoLinks from "../components/LiveRepoLinks";

const WorldBankClone = ({ value }) => {
  return (
    <article className="article-container">
      <div className="worldbank-clone-header">World Bank Clone</div>
      <p>
        This project is a static clone of the layout of the World Bank's main
        page. It aims to highlight the similarities in layout and structure with
        the World Bank's main page as of a specific point in time. Please note
        that the design of the World Bank website frequently changes, so the
        accuracy of the design may vary with the current website layout.
      </p>
      <p>This project was built using HTML, CSS and Vanilla Javascript.</p>
      <div className="worldbank-clone-images-container">
        <img
          src="/images/worldbank-main.png"
          className="worldbank-image1"
          alt="world bank website's main page"
        />
      </div>
      <p>
        The primary purpose of this project is to showcase the developer's web
        development skills by replicating the layout and structure of the World
        Bank website's main page using pure HTML and CSS. The project does not
        aim to copy the actual content, images, or writings of the World Bank
        website.
      </p>
      <div className="worldbank-clone-images-container">
        <img
          src="/images/worldbank-responsive.png"
          className="worldbank-image2"
          alt="world bank responsive page"
        />
      </div>
      <p>
        Responsive Design: The project features a responsive design, ensuring an
        optimal viewing experience on various devices and screen sizes.
      </p>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default WorldBankClone;
