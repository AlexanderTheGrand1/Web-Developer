import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h2>Welcome to My Landing Page</h2>
        <p>Your journey to success starts here. Discover more by scrolling down.</p>
        <a href="#cta" className="btn-primary">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;