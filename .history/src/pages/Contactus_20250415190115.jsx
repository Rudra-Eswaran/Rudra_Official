import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-[15px] right-[15px] z-50 rounded-xl px-6 py-4 transition-all duration-300 ease-in-out bg-white ${
        scrolled ? "shadow-[0_0_20px_rgba(0,102,255,0.4)]" : "shadow-[0_0_15px_rgba(0,0,255,0.2)]"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="your_logo.gif"
            alt="Logo"
            className="h-12 w-auto transition-transform transform hover:scale-110"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-blue-800">
          {["Home", "Portfolio", "Business", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-blue-400 transition duration-300 hover:scale-105"
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center hover:text-blue-400 transition duration-300 hover:scale-105"
            >
              Services <span className="ml-1 text-sm">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-4 space-y-2 text-sm text-blue-800">
                <li>
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-500"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edtech"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-500"
                  >
                    Edtech
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-800"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-blue-800 text-lg">
          {["Home", "Portfolio", "Business", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-400"
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Services Dropdown (Mobile) */}
          <li>
            <p className="text-sm font-semibold text-gray-600">Services</p>
            <ul className="ml-4 space-y-2 text-base">
              <li>
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/edtech"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Edtech
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
