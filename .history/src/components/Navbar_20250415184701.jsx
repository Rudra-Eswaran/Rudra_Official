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
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container-fluid px-4 md:px-6 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="path_to_your_logo.gif"
            alt="Rudrans Logo"
            className="h-12 w-auto transition-transform transform hover:scale-110"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-blue-800">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Blog
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <Link
              to="#"
              className="flex items-center hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Services
              <span className="ml-1 text-lg">↓</span> {/* Down Arrow */}
            </Link>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg text-blue-800 p-4 rounded-lg w-48 group-hover:block group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out">
              <li>
                <Link
                  to="/products"
                  className="block text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/edtech"
                  className="block text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Edtech
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 text-2xl transition-all ease-in-out duration-300"
          >
            {isOpen ? '❌' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-blue-800 p-6 space-y-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-300 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-300 transition-all duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-300 transition-all duration-300"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-300 transition-all duration-300"
            >
              Blog
            </Link>
          </li>

          {/* Services Dropdown in Mobile */}
          <li className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block text-lg hover:text-blue-300 transition-all duration-300 w-full text-left"
            >
              Services <span className="ml-1 text-lg">↓</span> {/* Down Arrow */}
            </button>
            {isOpen && (
              <ul className="space-y-2 pl-4">
                <li>
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className="text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edtech"
                    onClick={() => setIsOpen(false)}
                    className="text-sm hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Edtech
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-300 transition-all duration-300"
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
