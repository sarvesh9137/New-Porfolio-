import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app relative z-0">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
