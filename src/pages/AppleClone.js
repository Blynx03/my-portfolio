import "./appleClone.css";
import appleGrid from '../images/apple-grid.png';
import appleMain from '../images/apple-main.png';
import appleLinks from '../images/apple-links.png';
import appleCarousel from '../images/apple-carousel.png';
import appleResponsive from '../images/apple-responsive.png';
import LiveRepoLinks from "../components/LiveRepoLinks";


const AppleClone = ({ value }) => {
  return (
    <article className="apple-article-container">
      <div className="apple-header">Apple Clone</div>
      <div className="apple-header-caption">– A UI/UX Recreation of Apple’s Website –</div>
      <hr/>
      <p className="apple-section-description">
        This project is a faithful clone of the Apple website's main page. Its
        purpose is to showcase the developer's web development skills by
        replicating the main page's design and functionality. All links and
        elements on the cloned main page are linked to their corresponding pages
        on the official Apple website.
      </p>
      <img src={appleGrid} className="apple-page-images" alt="apple grid" />
      
      <section className="apple-section-container">
        <div className="apple-section-header">Project Description </div>
        <hr/>
        <div className="apple-section-sub-header">Purpose</div>
        <p className="apple-sub-section-description">The primary objective of this project is to demonstrate the developer's proficiency in web development, specifically in HTML, CSS, and JavaScript. By creating an accurate replica of the Apple website's main page, it serves as a testament to their front-end development capabilities.</p>
        <div className="apple-section-sub-header">Project Details</div>
        <ul className="apple-section-list-container">
          <li className="apple-section-list">
            <strong>Clone of Main Page: </strong>This project focuses on cloning the main page of the Apple website, including its layout, design, and content.
          </li>
          <img src={appleMain} className="apple-page-images" alt="apple iphone" />
          <li className="apple-section-list">
            <strong>Functional Links: </strong>Every link and interactive element on the cloned main page is fully functional and connected to the official Apple website. This ensures a seamless transition for users who wish to explore further.
          </li>
          <img src={appleLinks} className="apple-page-images" alt="apple links" />
          <li className="apple-section-list">
            <strong>Responsive Design: </strong>The project features a responsive design, ensuring an optimal viewing experience on various devices and screen sizes.
          </li>
          <img src={appleResponsive} className="apple-page-images" alt="apple responsive" />
          <li className="apple-section-list">
            <strong>Custom Carousel: </strong>The image carousel used in this project was implemented without the use of any libraries, demonstrating the developer's coding skills.
          </li>
          <img src={appleCarousel} className="apple-page-images" alt="apple carousel" />
        </ul>
      </section>

      <section className="apple-section-container">
        <div className="apple-section-header">Technologies Used</div>
        <hr/>
        <div className="apple-section-description">This project was built using the following technologies:</div>
        <ul className="apple-section-list-container">
          <li className="apple-section-list"><strong>HTML: </strong>Used to construct the structure and layout of the cloned main page.</li>
          <li className="apple-section-list"><strong>CSS: </strong>Employed for styling to replicate the visual design of the Apple website accurately and to create a responsive design.</li>
          <li className="apple-section-list"><strong>Javascript: </strong>Utilized to implement interactive features, including the custom image carousel.</li>
        </ul>
      </section>

      <section className="apple-section-container">
        <div className="apple-section-header">Usage</div>
        <hr/>
        <p className="apple-section-description">To view and interact with the cloned main page:</p>
        <ol className="apple-section-list-container">
          <li className="apple-section-list">Clone this repository to your local machine.</li>
          <li className="apple-section-list">Open the <code>index.html</code> file in your web browser.</li>
        </ol>
        <p className="apple-section-description">By clicking on any links or interactive elements on the cloned page, you will be directed to the corresponding pages on the actual Apple website.</p>
      </section>

      <section className="apple-section-container">
        <div className="apple-section-header">Note</div>
        <hr/>
        <p className="apple-section-description">Please be aware that this project is intended solely for educational and demonstrative purposes. It should not be used for commercial purposes or distribution. All intellectual property rights, including the Apple logo, branding, and content, belong to Apple Inc. Always respect copyright and trademark laws when working with brand-related content.</p>
        <p className="apple-section-description"><strong>Note: </strong>Some of the images used in this project are outdated and were taken for the past few years. Please keep this in mind when browsing the content.</p>
      </section>

      <section className="apple-section-container">
        <div className="apple-section-header">License</div>
        <hr/>
        <p className="apple-section-description">This project is provided under the <a className="apple-license" href="https://github.com/Blynx03/apple-clone/blob/master/LICENSE">MIT License</a>. Refer to the LICENSE file for more details.</p>
      </section>

      <section className="apple-section-container">
        <div className="apple-section-header">Acknowledgments</div>
        <hr/>
        <p className="apple-section-description">This project was inspired by the Apple website, and all credit for the design and branding goes to Apple Inc. We appreciate their inspiration for this project.</p>
      </section>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default AppleClone;
