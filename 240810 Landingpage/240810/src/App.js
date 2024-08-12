import React from 'react';
import Header from './header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;