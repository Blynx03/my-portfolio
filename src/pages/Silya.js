import React from "react";
import "./silya.css";
import LiveRepoLinks from "../components/LiveRepoLinks";
import silyaHome from "../images/silya-home.png";
import silyaGallery from "../images/silya-gallery.png";
import silyaContact from "../images/silya-contact.png";
import silyaDetail from "../images/silya-detail.png";
import silyaSignup from "../images/silya-signup.png"
import silyaCheckout from "../images/silya-cart.png"
import silyaPayment from "../images/silya-payment.png"

const Silya = ({ value }) => {
  return (
    <>
      <article className="silya-article-container">
        <div className="silya-header">SILYA</div>
        <div className="silya-header-caption">- A Clean & Responsive E-Commerce Experience -</div>
        <hr/>
        <p className="silya-project-description">
          Silya is a complete front-end e-commerce website designed for buying
          chairs. The website includes various features such as a home page,
          product gallery, contact form, login/signup functionality, recently
          viewed feature, product details, checkout and payment process.
          Responsive design for a seamless user experience across devices.
        </p>
        <p className="silya-project-description">
          Silya, showcases my expertise in a powerful
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

        <section className="silya-section-container">
          <div className="silya-section-header">Table of Contents</div>
          <hr/>
          <ul className="silya-section-list-container">
            <li className="silya-list-links"><a href='#features'>Features</a></li>
            <li className="silya-list-links"><a href='#pages'>Pages</a></li>
            <li className="silya-list-links"><a href='#tech'>Technologies Used</a></li>
            <li className="silya-list-links"><a href='#getting-started'>Getting Started</a></li>
          </ul>
        </section>

        <section className="silya-section-container">
          <div id="features" className="silya-section-header">Features</div>
          <hr/>
          <ul className="silya-section-list-container">
            <li className="silya-section-list">Navigation bar with links to home, gallery, contact, login, and cart.</li>
            <li className="silya-section-list">Product categories in the navigation sidebar for easy access.</li>
            <li className="silya-section-list">Search functionality with a dynamic search library for quick navigation.</li>
            <li className="silya-section-list">Recently viewed items section to revisit previously browsed products.</li>
            <li className="silya-section-list">Detailed product pages with images, price, inventory, description, specifications, and materials.</li>
            <li className="silya-section-list">Add to cart functionality with a checkout button.</li>
            <li className="silya-section-list">Checkout page for reviewing and managing cart items.</li>
            <li className="silya-section-list">Choice of free delivery if the minimum limit price is met.</li>
            <li className="silya-section-list">Option to choose delivery method (home delivery or store pick-up).</li>
            <li className="silya-section-list">Payment page with options for credit card or PayPal payment.</li>
            <li className="silya-section-list">Form for credit card details and summary of the transaction.</li>
            <li className="silya-section-list">Smooth navigation between pages for a user-friendly experience.</li>
            <li className="silya-section-list">Responsive design for a seamless user experience across devices.</li>
          </ul>
        </section>

        <section className="silya-section-container">
          <div id="pages" className="silya-section-header">Project Pages</div>
          <hr/>
          <ul className="silya-section-list-container">
            <li className="silya-section-list"><strong>Home Page: </strong>Landing page showcasing featured products and brand identity</li>
            <img
              src={silyaHome}
              alt="silya-homepage"
              className="silya-page-images"
            />
            <p className="silya-image-description">Landing page with a header, search bar, navigation bar, and featured content.</p>

            <li className="silya-section-list"><strong>Gallery Page: </strong>Product gallery with visual browsing and category layout</li>
            <img
              src={silyaGallery}
              alt="gallery-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">Display of all available products categorized by chair type.</p>

            <li className="silya-section-list"><strong>Contact Page:</strong>Simple contact page for customer inquiries</li>
            <img
              src={silyaContact}
              alt="contact-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">Form to directly message the company and contact information.</p>

            <li className="silya-section-list"><strong>Detail Page:</strong>Detailed product view with images and key information</li>
            <img 
              src={silyaDetail}
              alt="detail-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">Detailed information about a specific product with an option to add to cart.</p>

            <li className="silya-section-list"><strong>Login/Signup Page:</strong>User authentication interface for account access</li>
            <img
              src={silyaSignup}
              alt="signup-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">User authentication page for logging in or creating a new account.</p>

            <li className="silya-section-list"><strong>Checkout Page:</strong> Checkout flow with order summary and user details</li>
            <img
              src={silyaCheckout}
              alt="checkout-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">Review and manage cart items, choose delivery options, and proceed to payment.</p>

            <li className="silya-section-list"><strong>Payment Page:</strong>Payment page demonstrating transaction and confirmation UI</li>
            <img
              src={silyaPayment}
              alt="payment-page"
              className="silya-page-images"
            />
            <p className="silya-image-description">Form for credit card and delivery information. Transaction summary.</p>
          </ul>

          <section className="silya-section-container">
            <div id="tech" className="silya-section-header">Technologies Used</div>
            <hr/>
            <ul className="silya-section-list-container">
              <li className="silya-section-list">HTML</li>
              <li className="silya-section-list">CSS</li>
              <li className="silya-section-list">Javascript</li>
              <li className="silya-section-list">React</li>
            </ul>
          </section>

          <section className="silya-section-container">
            <div id="getting-started" className="silya-section-header">Getting Started</div>
            <hr/>
            <p className="silya-section-description">To run the project locally, follow these steps:</p>
            <ol className="silya-section-list-container">
              <li className="silya-section-list">Clone the repository: git clone [https://github.com/Blynx03/silya]</li>
              <li className="silya-section-list">Navigate to the project directory: cd silya</li>
              <li className="silya-section-list">Install dependencies: npm install</li>
              <li className="silya-section-list">Start the development server: npm start</li>
              <li className="silya-section-list">Use abc@abc.com for the email and "abc" for the password</li>
            </ol>
          </section>
        </section>

        <LiveRepoLinks value={value} />
      </article>
    </>
  );
};

export default Silya;
