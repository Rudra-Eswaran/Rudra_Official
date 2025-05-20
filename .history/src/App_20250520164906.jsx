import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Rudrans from './pages/Rudrans';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Certify from './pages/Certify';
import Contactus from './pages/Contactus';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Rudrans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certify />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
