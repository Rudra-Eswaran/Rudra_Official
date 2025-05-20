import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './pages/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Certify from './pages/Certify';
import Contactus from './pages/Contactus';
import Rudrans from './pages/Rudrans';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/t" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certify />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/rudrans" element={<Rudrans />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
