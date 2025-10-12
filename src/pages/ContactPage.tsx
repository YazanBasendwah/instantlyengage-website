import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const ContactPage: React.FC = () => {
  useScrollAnimations();

  return (
    <>
      {/* Contact Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Ready to Grow Your Institution?</h1>
            <p>Book a free strategy call to discuss how we can increase your enrollments</p>
            <a href="https://wa.me/966545891557" className="cta-btn" target="_blank" rel="noopener noreferrer">Book A Call Now</a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="video-section">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="results-grid">
            <div className="result-card fade-in">
              <h3>Contact Information</h3>
              <p className="result-description">WhatsApp: +966 545 891 557</p>
              <p className="result-description">Ready to grow your institution?</p>
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <a href="https://wa.me/966545891557" className="cta-btn" target="_blank" rel="noopener noreferrer">Message Us on WhatsApp</a>
              </div>
            </div>
            <div className="result-card fade-in">
              <h3>Our Services</h3>
              <p>• Website Development</p>
              <p>• Google Ads Management</p>
              <p>• Meta Ads Campaigns</p>
              <p>• TikTok & Snapchat Marketing</p>
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <a href="https://wa.me/966545891557" className="cta-btn" target="_blank" rel="noopener noreferrer">Discuss Your Needs</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;