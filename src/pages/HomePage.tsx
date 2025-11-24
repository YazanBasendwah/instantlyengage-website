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
            <h1>We Get Your School 10-40 New Tour Bookings Every Month (Or You Don't Pay)</h1>  
            <p>Supporting Description Text Area - Professional digital marketing services explanation will go here</p>
            <Link to="/contact" className="cta-btn">Book A Call</Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section" id="services">
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

export default HomePage;
