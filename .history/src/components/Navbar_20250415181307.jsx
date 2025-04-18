import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary shadow-md transition-all ease-in-out duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* GIF Logo */}
        <div className="flex items-center">
          <img src="path_to_your_logo.gif" alt="Rudrans Logo" className="h-12 w-auto transition-transform transform hover:scale-110" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Business
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/rudrans" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Rudrans
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white transition-all ease-in-out duration-300">
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-primary">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/business" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Business
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/rudrans" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Rudrans
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400 transition-all ease-in-out duration-300 transform hover:scale-105">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
