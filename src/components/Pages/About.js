import React from 'react';
import '../css/about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Dairy Company! We have been providing fresh and high-quality dairy products to our community for over a decade. Our journey began with a passion for delivering farm-fresh milk and dairy products directly to your doorstep.
          </p>
          <p>
            Our commitment to quality and customer satisfaction drives us to continuously improve and innovate. We believe in sustainable farming practices and work closely with local farmers to ensure that our products are both delicious and responsibly sourced.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring the freshest and highest quality dairy products to our customers while promoting ethical and sustainable practices in agriculture. We strive to create a positive impact on our community and the environment.
          </p>
        </div>

        <div className="about-section">
          <h2>Meet the Team</h2>
          <div className="team">
            <div className="team-member">
              <img src="/assets/images/team-member1.jpg" alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
              <p>Jane leads our company with a vision for sustainability and quality. With years of experience in the dairy industry, she ensures that every product meets our high standards.</p>
            </div>
            <div className="team-member">
              <img src="/assets/images/team-member2.jpg" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Operations Manager</p>
              <p>John manages our daily operations, from sourcing to delivery. His attention to detail ensures that our products reach you fresh and on time.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;
