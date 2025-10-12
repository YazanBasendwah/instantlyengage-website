import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const ResultsPage: React.FC = () => {
  useScrollAnimations();

  return (
    <>
      {/* Results Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Real Results from Real Clients</h1>
            <p>See how we've helped educational institutions grow their enrollments</p>
            <Link to="/contact" className="cta-btn">Book A Call</Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <h2 className="section-title fade-in">Real Results from Real Clients</h2>
          <div className="results-grid">
            <div className="result-card fade-in">
              <div className="result-stats">150%</div>
              <h3>Client Name Placeholder #1</h3>
              <p className="result-description">Results Statistics Here - Riyadh based institution with multiple branches</p>
              <p><strong>Services Provided:</strong> Services Provided Description</p>
              <div className="client-video-placeholder">
                <div className="placeholder-text">Client Video Interview #1</div>
              </div>
            </div>
            <div className="result-card fade-in">
              <div className="result-stats">200+</div>
              <h3>Client Name Placeholder #2</h3>
              <p className="result-description">Results Statistics Here - Jeddah based institution growth metrics</p>
              <p><strong>Services Provided:</strong> Services Provided Description</p>
              <div className="client-video-placeholder">
                <div className="placeholder-text">Client Video Interview #2</div>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link to="/contact" className="cta-btn">Want Results Like These? Let's Talk</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title fade-in">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in">
              <div className="client-photo">A</div>
              <p>"Testimonial Quote Text Here - Client feedback will be placed in this area"</p>
              <h4>Client Name and Position</h4>
            </div>
            <div className="testimonial-card fade-in">
              <div className="client-photo">B</div>
              <p>"Testimonial Quote Text Here - Client feedback will be placed in this area"</p>
              <h4>Client Name and Position</h4>
            </div>
            <div className="testimonial-card fade-in">
              <div className="client-photo">C</div>
              <p>"Testimonial Quote Text Here - Client feedback will be placed in this area"</p>
              <h4>Client Name and Position</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;