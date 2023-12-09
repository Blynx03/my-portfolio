import React from "react";
import "./silya.css";
import LiveRepoLinks from "../components/LiveRepoLinks";

const Silya = ({ value }) => {
  return (
    <>
      <article className="article-container">
        <div className="silya-header">SILYA - E-Commerce</div>
        <p>
          Silya is a complete front-end e-commerce website designed for buying
          chairs. The website includes various features such as a home page,
          product gallery, contact form, login/signup functionality, recently
          viewed feature, product details, checkout and payment process.
          Responsive design for a seamless user experience across devices.
        </p>

        <div className="project-image-container">
          <img
            src="images/silya-home.png"
            alt="silya-homepage"
            className="page-images"
          />
          <p className="page-description">
            Silya, my latest creation, showcases my expertise in a powerful
            blend of cutting-edge technologies. Crafted with proficiency in
            HTML, CSS, and JavaScript, the website boasts a seamless and
            visually appealing user interface. Leveraging the versatility of
            React, I've implemented dynamic features, ensuring a smooth
            navigation experience across various devices. This project not only
            reflects my commitment to staying at the forefront of web
            development but also demonstrates my proficiency in harnessing the
            potential of these technologies to create an immersive front-end
            e-commerce platform.
          </p>
        </div>

        <LiveRepoLinks value={value} />
      </article>
    </>
  );
};

export default Silya;
