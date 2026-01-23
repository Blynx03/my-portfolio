import "./worldBankClone.css";
import wbMain from '../images/worldbank-main.png';
import wbResponsive from '../images/worldbank-responsive.png';
import wbNewsEvent from '../images/worldbank-news-events.png';
import wbFooter from '../images/worldbank-footer.png';
import LiveRepoLinks from "../components/LiveRepoLinks";

const WorldBankClone = ({ value }) => {
  return (
    <article className="wb-article-container">
      <div className="wb-header">World Bank Clone</div>
      <div className="wb-header-caption">– A Pixel-Perfect World Bank Website Recreation –</div>
      <hr/>
      <p className="wb-section-description">
        This project is a static clone of the layout of the World Bank's main page. It aims to highlight the similarities in layout and structure with the World Bank's main page as of a specific point in time. Please note that the design of the World Bank website frequently changes, so the accuracy of the design may vary with the current website layout.
      </p>
      <img src={wbMain} className="wb-page-images" alt="worldbank main page" />
      
      <section className="wb-section-container">
        <div className="wb-section-header">Project Description </div>
        <hr/>
        <div className="wb-section-sub-header">Purpose</div>
        <p className="wb-sub-section-description">The primary purpose of this project is to showcase the developer's web development skills by replicating the layout and structure of the World Bank website's main page using pure HTML and CSS. The project does not aim to copy the actual content, images, or writings of the World Bank website.</p>
        <div className="wb-section-sub-header">Project Details</div>
        <ul className="wb-section-list-container">
          <li className="wb-section-list">
            <strong>Clone of Layout: </strong>This project focuses on cloning the layout and structure of the World Bank's main page, including its header, navigation, content sections, and footer.
          </li>
          <img src={wbFooter} className="wb-page-images" alt="worldbank footer" />
          <li className="wb-section-list">
            <strong>Responsive Design: </strong>The project features a responsive design to ensure an optimal viewing experience on various devices and screen sizes.
          </li>
          <img src={wbResponsive} className="wb-page-images" alt="worldbank responsive" />
          <li className="wb-section-list">
            <strong>Static Content: </strong>The project contains static content and images that may differ from the actual World Bank website. The focus is on layout and structure accuracy.
          </li>
          <img src={wbNewsEvent} className="wb-page-images" alt="worldbank news event" />
        </ul>
      </section>

      <section className="wb-section-container">
        <div className="wb-section-header">Technologies Used</div>
        <hr/>
        <div className="wb-section-description">This project was built using the following technologies:</div>
        <ul className="wb-section-list-container">
          <li className="wb-section-list"><strong>HTML: </strong>Used to construct the structure and layout of the cloned page, including header, navigation, content sections, and footer.</li>
          <li className="wb-section-list"><strong>CSS: </strong>Employed for styling to replicate the layout and design of the World Bank website as accurately as possible, including making the design responsive.</li>
        </ul>
      </section>

      <section className="wb-section-container">
        <div className="wb-section-header">Usage</div>
        <hr/>
        <p className="wb-section-description">To view the cloned layout of the World Bank's main page:</p>
        <ol className="wb-section-list-container">
          <li className="wb-section-list">Clone this repository to your local machine.</li>
          <li className="wb-section-list">Open the <code>index.html</code> file in your web browser.</li>
        </ol>
        <p className="wb-section-description">The cloned layout will showcase the similarities in structure and layout with the World Bank website as of a specific point in time, while also being responsive to various screen sizes.</p>
      </section>

      <section className="wb-section-container">
        <div className="wb-section-header">Note</div>
        <hr/>
        <p className="wb-section-description">Please be aware that this project is intended solely for educational and demonstrative purposes. It does not aim to copy the actual content, images, or writings of the World Bank website. The accuracy of the design may vary with the current website layout of the World Bank.</p>
      </section>

      <section className="wb-section-container">
        <div className="wb-section-header">License</div>
        <hr/>
        <p className="wb-section-description">This project is provided under the MIT License. Refer to the <a className="wb-license" href="https://github.com/Blynx03/worldbank-clone/blob/master/LICENSE" >License</a> for more details.</p>
      </section>

      <section className="wb-section-container">
        <div className="wb-section-header">Acknowledgments</div>
        <hr/>
        <p className="wb-section-description">This project was inspired by the layout and structure of the World Bank website. We acknowledge the World Bank for providing the inspiration for this project.</p>
      </section>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default WorldBankClone;
