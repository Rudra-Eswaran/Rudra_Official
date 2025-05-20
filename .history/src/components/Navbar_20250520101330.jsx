import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50 mt-4 mx-4 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Eswaran
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-base text-white">
          {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden focus:outline-none text-white"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md rounded-b-lg">
          <ul className="flex flex-col space-y-4 py-4 text-center font-semibold text-lg text-white">
            {["Home", "Team", "Services", "Products", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  onClick={handleMobileMenuToggle}
                  className="block hover:text-gray-300 transition-colors"
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
