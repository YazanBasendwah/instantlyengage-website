import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const ProcessPage: React.FC = () => {
  useScrollAnimations();

  return (
    <>
      {/* Process Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>How We Deliver Results</h1>
            <p>Our proven 4-step process for growing educational institutions</p>
            <Link to="/contact" className="cta-btn">Book A Call</Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title fade-in">How We Deliver Results</h2>
          <div className="process-steps">
            <div className="process-step fade-in">
              <div className="step-number">1</div>
              <h3 className="step-title">Step Title Here</h3>
              <p className="step-description">Process Step Description Here - Discovery and analysis phase explanation</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">2</div>
              <h3 className="step-title">Step Title Here</h3>
              <p className="step-description">Process Step Description Here - Strategy development phase explanation</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">3</div>
              <h3 className="step-title">Step Title Here</h3>
              <p className="step-description">Process Step Description Here - Implementation phase explanation</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">4</div>
              <h3 className="step-title">Step Title Here</h3>
              <p className="step-description">Process Step Description Here - Results and optimization phase</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link to="/contact" className="cta-btn">Start Your Growth Journey Today</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;