import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <AboutSection />
      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;