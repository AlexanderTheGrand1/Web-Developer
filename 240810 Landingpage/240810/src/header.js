import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Landing Page</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;