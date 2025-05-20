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
    <div
      className={`max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-md transition-shadow duration-700 ease-in-out ${
        scrolled ? "shadow-lg shadow-blue-400/30" : "shadow-md shadow-blue-300/20"
      }`}
    >
      <nav className="w-full flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <img src="path_to_your_logo.gif" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-blue-800 text-[17px] font-medium">
          {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
            <li key={item} data-aos="fade-down">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="transition-colors hover:text-blue-600"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden text-blue-800 p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4 w-full">
          <ul className="flex flex-col space-y-4 text-center text-blue-800 text-lg font-medium">
            {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
              <li key={item} data-aos="fade-up">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="transition-colors hover:text-blue-600"
                  onClick={handleMobileMenuToggle}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
