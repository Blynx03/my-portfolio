import React from "react";
import "./appleClone.css";
import LiveRepoLinks from "../components/LiveRepoLinks";

const AppleClone = ({ value }) => {
  return (
    <article className="article-container">
      <div className="apple-clone-header">Apple Clone</div>
      <p>
        This project is a faithful clone of the Apple website's main page. Its
        purpose is to showcase the developer's web development skills by
        replicating the main page's design and functionality. All links and
        elements on the cloned main page are linked to their corresponding pages
        on the official Apple website.
      </p>
      <p>This project was built using HTML, CSS and Vanilla Javascript.</p>

      <div className="apple-clone-images-container">
        <img
          src="/images/apple-main.png"
          className="apple-image1"
          alt="apple website's main page"
        />
      </div>
      <p>
        Functional Links: Every link and interactive element on the cloned main
        page is fully functional and connected to the official Apple website.
        This ensures a seamless transition for users who wish to explore
        further.
      </p>
      <div className="apple-clone-images-container">
        <img
          src="/images/apple-responsive.png"
          className="apple-image2"
          alt="apple website's responsive design"
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

export default AppleClone;
