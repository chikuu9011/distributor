import React from 'react';
import '../css/contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-info">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Here’s how you can reach us.</p>
          <address>
            <p><strong>Address:</strong> 123 Dairy Lane, Milk City, DA 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> contact@dairycompany.com</p>
          </address>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default ContactPage;
