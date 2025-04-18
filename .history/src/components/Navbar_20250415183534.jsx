import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect when the user scrolls to change the navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 py-4 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-teal-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="path_to_your_logo.gif"
            alt="Rudrans Logo"
            className="h-12 w-auto transition-transform transform hover:scale-110"
          />
          <h1 className="text-xl font-semibold text-white">Rudrans</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
          <li>
            <Link
              to="/"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/rudrans"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Rudrans
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl transition-all ease-in-out duration-300"
          >
            {isOpen ? '❌' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-teal-600 text-white p-6 space-y-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/rudrans"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Rudrans
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-teal-300 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
