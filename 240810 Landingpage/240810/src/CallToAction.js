import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h3>Ready to Take the Next Step?</h3>
        <p>Join us today and start your journey towards success.</p>
        <a href="#header" className="btn-secondary">Join Now</a>
      </div>
    </section>
  );
}

export default CallToAction;