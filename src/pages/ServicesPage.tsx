import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const ServicesPage: React.FC = () => {
  useScrollAnimations();

  return (
    <>
      {/* Services Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Digital Marketing Services</h1>
            <p>Comprehensive solutions for educational institutions and healthcare providers</p>
            <Link to="/contact" className="cta-btn">Book A Call</Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <h2 className="section-title fade-in">Main Sales Video Section</h2>
          <div className="video-placeholder fade-in">
            <div className="play-btn"></div>
            <div className="placeholder-text">Main Sales Video Placeholder - VSL Content Here</div>
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link to="/contact" className="cta-btn">Book A Call After Video</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;