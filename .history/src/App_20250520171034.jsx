import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certify from "./pages/Certify";
import Rudrans from "./pages/Rudrans";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certify />} />
        <Route path="/team" element={<Rudrans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
