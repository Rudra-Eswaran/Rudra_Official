import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 mt-4 mx-4 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-2xl font-bold" style={{ color: "#99bbff" }}>
          Eswaran
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-base" style={{ color: "#99bbff" }}>
          {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
          style={{ color: "#99bbff" }}
        >
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-lg">
          <ul className="flex flex-col space-y-4 py-4 text-center font-semibold text-lg" style={{ color: "#99bbff" }}>
            {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  onClick={handleMobileMenuToggle}
                  className="block hover:text-blue-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
