import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const HomePage: React.FC = () => {
  useScrollAnimations();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>We Get Your School 5–15 New Student Enrollments in 90 Days (Or You Don't Pay)</h1>  
            <p>WITHOUT relying on word-of-mouth referrals, waiting for parents to find you, or posting endlessly on social media</p>
            <Link to="/contact" className="cta-btn">Book A Call</Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section" id="services">
        <div className="container">
          <div className="video-placeholder fade-in">
            <div className="play-btn"></div>
            <div className="placeholder-text">Main Sales Video Placeholder - VSL Content Here</div>
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link to="/contact" className="cta-btn">Book Your Strategy Call</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
