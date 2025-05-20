import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

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
      className={`relative z-50 ${hovering ? "glow-border" : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <nav
        className={`backdrop-blur-md rounded-xl transition-all duration-300 ease-in-out px-4 py-3
        ${scrolled ? "shadow-[0_0_20px_rgba(0,102,255,0.4)]" : "shadow-[0_0_12px_rgba(0,102,255,0.2)]"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 md:px-6">
          {/* Logo */}
          <div>
            <img
              src="path_to_your_logo.gif"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-[17px] font-medium text-blue-800">
            {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
              <li key={item} data-aos="fade-down">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
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
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4">
            <ul className="space-y-4 text-center text-lg font-medium text-blue-800">
              {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
                <li key={item} data-aos="fade-up">
                  <Link
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="transition-all"
                    onClick={handleMobileMenuToggle}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
