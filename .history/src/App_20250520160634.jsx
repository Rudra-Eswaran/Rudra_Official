import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certify from './pages/Certify';
import Footer from './pages/Footer';
import Contactus  from './pages/Contactus';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Rudrans from './pages/Rudrans';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
       <Projects/>
      <Certify/>
      <Rudrans/>
      <Services/>
      <Contactus/>
      <Footer/>


    </div>
  );
}

export default App;
