import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close button

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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
          <li>
            <Link to="/" className="hover:text-blue-400 hover:scale-105 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-400 hover:scale-105 transition-all">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-blue-400 hover:scale-105 transition-all">
              Business
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-400 hover:scale-105 transition-all">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-blue-400 hover:scale-105 transition-all">
              Team
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-blue-400 hover:scale-105 transition-all"
            >
              Services <span className="ml-1 text-sm">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white border border-blue-200 shadow-xl rounded-md py-2 w-44 animate-fadeIn space-y-2 text-blue-800 z-50">
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edtech"
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Edtech
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Products Link */}
          <li>
            <Link to="/products" className="hover:text-blue-400 hover:scale-105 transition-all">
              Products
            </Link>
          </li>

          <li>
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
            <li>
              <Link
                to="/"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Team
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-blue-400 hover:scale-105 transition-all"
              >
                Services <span className="ml-1 text-sm">{isDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-blue-200 shadow-xl rounded-md py-2 w-44 animate-fadeIn space-y-2 text-blue-800 z-50">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/edtech"
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Edtech
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Link */}
            <li>
              <Link
                to="/products"
                className="block hover:text-blue-400 hover:scale-105 transition-all"
                onClick={handleMobileMenuToggle}
              >
                Products
              </Link>
            </li>

            <li>
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
