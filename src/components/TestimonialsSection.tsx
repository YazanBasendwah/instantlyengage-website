import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title fade-in">What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card fade-in">
            <a href="https://littleangelsriyadh.com" target="_blank" rel="noopener noreferrer" className="client-logo-link">
              <img src="https://i.imgur.com/5NtkTv2.png" alt="Little Angels Montessori Preschool" className="client-logo" />
            </a>
            <p>"I was skeptical at first, but working with Yazan has been worth every penny. He elevated our website beyond expectations, expanded our social media presence, and helped expose Little Angels to families who didn't know us yet. What I admire most is that he's always ahead of the game—coming up with ideas before I even think of them. He knows our Montessori approach inside and out, and everything he creates is polished and convincing. I have no regrets whatsoever and would recommend him to anyone."</p>
            <h4>Suha Hussein, Founder & Director<br/>Little Angels Montessori Preschool</h4> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;