import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import Certify from './pages/Certify';
import Footer from './pages/Footer';
import Contactus  from './pages/Contactus';
import Project from './pages/s';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Certify/>
      <Projects/>
      <Contactus/>
      <Footer/>


    </div>
  );
}

export default App;
