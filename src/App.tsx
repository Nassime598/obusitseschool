import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-opensans text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Gallery />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;