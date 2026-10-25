import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConfigNotice from './components/ConfigNotice';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Helper notice for easy setup */}
      <ConfigNotice />
    </div>
  );
}
