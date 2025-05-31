import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Timeline from './sections/Timeline';
import KeyFigures from './sections/KeyFigures';
import MauryanMap from './sections/MauryanMap';
import Dharma from './sections/Dharma';
import Legacy from './sections/Legacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-50 text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <KeyFigures />
        <MauryanMap />
        <Dharma />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
}

export default App;