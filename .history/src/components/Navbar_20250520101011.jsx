import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import AOS from "aos";

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
    <div>
      <nav>
        <div>
          <img src="path_to_your_logo.gif" alt="Logo" />
        </div>

        <ul>
          {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
            <li key={item} data-aos="fade-down">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={handleMobileMenuToggle} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div>
          <ul>
            {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
              <li key={item} data-aos="fade-up">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
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
