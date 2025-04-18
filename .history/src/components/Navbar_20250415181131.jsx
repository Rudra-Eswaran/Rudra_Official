import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary shadow-md transition-all ease-in-out duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white transition-transform transform hover:scale-110">
          Rudrans
        </h1>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-teal-400 transition duration-300">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-teal-400 transition duration-300">Portfolio</Link></li>
          <li><Link to="/business" className="hover:text-teal-400 transition duration-300">Business</Link></li>
          <li><Link to="/blog" className="hover:text-teal-400 transition duration-300">Blog</Link></li>
          <li><Link to="/rudrans" className="hover:text-teal-400 transition duration-300">Rudrans</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400 transition duration-300">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-primary">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Home</Link></li>
          <li><Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Portfolio</Link></li>
          <li><Link to="/business" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Business</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Blog</Link></li>
          <li><Link to="/rudrans" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Rudrans</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
