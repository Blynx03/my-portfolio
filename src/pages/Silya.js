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
          product gallery, contact form, login/signup functionality, and a
          seamless checkout process.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>
            Navigation bar with links to home, gallery, contact, login, and
            cart.
          </li>
          <li>Product categories in the navigation sidebar for easy access.</li>
          <li>
            Search functionality with a dynamic search library for quick
            navigation.
          </li>
          <li>
            Recently viewed items section to revisit previously browsed
            products.
          </li>
          <li>
            Detailed product pages with images, price, inventory, description,
            specifications, and materials.
          </li>
          <li>Add to cart functionality with a checkout button.</li>
          <li>Checkout page for reviewing and managing cart items.</li>
          <li>Choice of free delivery if the minimum limit price is met.</li>
          <li>
            Option to choose delivery method (home delivery or store pick-up).
          </li>
          <li>Payment page with options for credit card or PayPal payment.</li>
          <li>Form for credit card details and summary of the transaction.</li>
          <li>
            Smooth navigation between pages for a user-friendly experience.
          </li>
          <li>
            Responsive design for a seamless user experience across devices.
          </li>
        </ul>

        <h3 className="title">Pages</h3>
        <h4 className="page-titles">Home Page</h4>
        <img
          src="images/silya-home.png"
          alt="silya-homepage"
          className="page-images"
        />
        <p className="page-description">
          Landing page with a header, search bar, navigation bar, and featured
          content.
        </p>

        <h4 className="page-titles">Gallery Page</h4>
        <img
          src="images/silya-gallery.png"
          alt="silya-gallery"
          className="page-images"
        />
        <p className="page-description">
          Display of all available products categorized by chair type.
        </p>

        <h4 className="page-titles">Contact Page</h4>
        <img
          src="images/silya-contact.png"
          alt="silya-contact"
          className="page-images"
        />
        <p className="page-description">
          Form to directly message the company and contact information.
        </p>

        <h4 className="page-titles">Detail Page</h4>
        <img
          src="images/silya-detail.png"
          alt="silya-detail"
          className="page-images"
        />
        <p className="page-description">
          Detailed information about a specific product with an option to add to
          cart.
        </p>

        <h4 className="page-titles">Login/Signup Page</h4>
        <img
          src="images/silya-signup.png"
          alt="silya-login"
          className="page-images"
        />
        <p className="page-description">
          User authentication page for logging in or creating a new account.
        </p>

        <h4 className="page-titles">Checkout Page</h4>
        <img
          src="images/silya-cart.png"
          alt="silya-checkout"
          className="page-images"
        />
        <p className="page-description">
          Review and manage cart items, choose delivery options, and proceed to
          payment.
        </p>

        <h4 className="page-titles">Payment Page</h4>
        <img
          src="images/silya-payment.png"
          alt="silya-payment"
          className="page-images"
        />
        <p className="page-description">
          Form for credit card and delivery information. Transaction summary.
        </p>

        <h3>Technologies Used</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

        <h3>Getting Started</h3>
        <ol>
          <li>
            Clone the repository: git clone [https://github.com/Blynx03/silya]
          </li>
          <li>Navigate to the project directory: cd silya</li>
          <li>Install dependencies: npm install</li>
          <li>Start the development server: npm start</li>
          <li>Use abc@abc.com for the email and "abc" for the password.</li>
        </ol>
      </article>
      <LiveRepoLinks value={value} />
    </>
  );
};

export default Silya;
