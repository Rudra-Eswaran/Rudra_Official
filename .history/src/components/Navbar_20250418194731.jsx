import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md transition-all duration-300 ease-in-out 
        ${scrolled ? "shadow-[0_0_20px_rgba(0,102,255,0.4)]" : "shadow-[0_0_12px_rgba(0,102,255,0.2)]"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="path_to_your_logo.gif"
            alt="Logo"
            className="h-12 w-auto transition-transform transform hover:scale-110"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[17px] font-medium text-blue-800">
          <li data-aos="fade-down">
            <Link to="/" className="hover:text-blue-400 hover:scale-105 transition-all">
              Home
            </Link>
          </li>
          <li data-aos="fade-down">
            <Link to="/team" className="hover:text-blue-400 hover:scale-105 transition-all">
              Team
            </Link>
          </li>
          <li data-aos="fade-down">
            <Link to="/services" className="hover:text-blue-400 hover:scale-105 transition-all">
              Services
            </Link>
          </li>
          <li data-aos="fade-down">
            <Link to="/edtech" className="hover:text-blue-400 hover:scale-105 transition-all">
              Edtech
            </Link>
          </li>
          <li data-aos="fade-down">
            <Link to="/products" className="hover:text-blue-400 hover:scale-105 transition-all">
              Products
            </Link>
          </li>
          <li data-aos="fade-down">
            <Link to="/contact" className="hover:text-blue-400 hover:scale-105 transition-all">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden text-blue-800 p-2"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-lg z-50 p-4">
          <ul className="space-y-4 text-center text-lg font-medium text-blue-800">
            <li data-aos="fade-up">
              <Link
                to="/"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Home
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link
                to="/team"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Team
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link
                to="/services"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Services
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link
                to="/edtech"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Edtech
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link
                to="/products"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Products
              </Link>
            </li>
            <li data-aos="fade-up">
              <Link
                to="/contact"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
