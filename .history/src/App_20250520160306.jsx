import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import Certify from './pages/Certify';
import Footer from '';
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
