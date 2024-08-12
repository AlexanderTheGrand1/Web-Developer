import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h3>What Our Users Say</h3>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"This service is amazing! Highly recommended."</p>
            <h4>- User One</h4>
          </div>
          <div className="testimonial-item">
            <p>"It helped me achieve my goals in no time."</p>
            <h4>- User Two</h4>
          </div>
          <div className="testimonial-item">
            <p>"A game-changer for my business."</p>
            <h4>- User Three</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;