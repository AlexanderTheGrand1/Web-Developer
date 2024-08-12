import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h3>Our Features</h3>
        <div className="feature-list">
          <div className="feature-item">
            <h4>Feature One</h4>
            <p>Describe the benefit of the feature here.</p>
          </div>
          <div className="feature-item">
            <h4>Feature Two</h4>
            <p>Describe the benefit of the feature here.</p>
          </div>
          <div className="feature-item">
            <h4>Feature Three</h4>
            <p>Describe the benefit of the feature here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;