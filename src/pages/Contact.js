import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully.");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Error sending email.");
        }
      );
  }

  return (
    <article className="contact-container">
      <h2 className="contact-header">Get In Touch</h2>
      <div className="line-design"></div>
      <div className="sweet-note">
        Do you have an exciting project in mind? Don't hesitate to reach out and
        send me a message!
      </div>
      <form ref={form} className="form-container" onSubmit={handleSubmit}>
        <label className="form-name" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="form-email" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className="form-subject" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label className="form-message" htmlFor="message">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="send-btn" type="submit">
          Send Message
        </button>
      </form>
      <div className="contact-info-container">
        <div className="contact-info">CONTACT DETAILS:</div>
        <div className="email-container">
          <div className="contact-email">Email: </div>
          <span><a href="mailto:cchan_03@yahoo.ca" className="contact-email-address">cchan_03@yahoo.ca</a></span>
        </div>
        <div className="tel-container">
          <div className="contact-tel">Tel: </div>
          <span>416-857-3132</span>
        </div>
      </div>
    </article>
  );
};

export default Contact;
