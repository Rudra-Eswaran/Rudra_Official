// Navbar.jsx
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
    <>
      <style>{`
        @keyframes glowFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`relative rounded-xl p-4 transition-shadow duration-700 ease-in-out mb-0 ${
          scrolled ? "shadow-lg shadow-blue-400/30" : "shadow-md shadow-blue-300/20"
        }`}
        style={{
          borderRadius: "0.75rem",
          padding: "1rem",
          ...(hovering && {
            position: "relative",
            zIndex: 1,
            boxShadow: `
              0 0 6px 1.5px rgba(0, 102, 255, 0.25),
              0 0 12px 3px rgba(0, 204, 255, 0.15),
              0 0 15px 5px rgba(240, 0, 255, 0.1)
            `,
            transition: "box-shadow 0.7s ease-in-out",
          }),
        }}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <div>
            <img src="path_to_your_logo.gif" alt="Logo" className="h-12 w-auto" />
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
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

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
      </div>
    </>
  );
};

export default Navbar;
