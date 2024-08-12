import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React Website</h1>
        <p>This is a basic website built with React.</p>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home Section</h2>
          <p>This is the home section of the website.</p>
        </section>
        <section id="about">
          <h2>About Section</h2>
          <p>Here is some information about the website.</p>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
          <p>Get in touch with us through this section.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Simple React Website</p>
      </footer>
    </div>
  );
}

export default App;