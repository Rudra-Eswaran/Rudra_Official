import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
      className={`fixed top-4 left-[15px] right-[15px] z-50 p-4 rounded-xl backdrop-blur-md transition-all duration-300 ease-in-out 
        ${scrolled ? "shadow-[0_0_20px_rgba(0,102,255,0.4)]" : "shadow-[0_0_12px_rgba(0,102,255,0.2)]"}
      `}
    >
      <div className="flex justify-between items-center px-4 md:px-8 bg-transparent">
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
          <li><Link to="/" className="hover:text-blue-400 hover:scale-105 transition-all">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-400 hover:scale-105 transition-all">Portfolio</Link></li>
          <li><Link to="/business" className="hover:text-blue-400 hover:scale-105 transition-all">Business</Link></li>
          <li><Link to="/blog" className="hover:text-blue-400 hover:scale-105 transition-all">Blog</Link></li>
          <li><Link to="/team" className="hover:text-blue-400 hover:scale-105 transition-all">Team</Link></li>

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
                <li><Link to="/products" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsDropdownOpen(false)}>Products</Link></li>
                <li><Link to="/services" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsDropdownOpen(false)}>Services</Link></li>
                <li><Link to="/edtech" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsDropdownOpen(false)}>Edtech</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-blue-400 hover:scale-105 transition-all">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
