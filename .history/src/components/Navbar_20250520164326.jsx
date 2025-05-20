import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 mt-4 px-6 rounded-lg bg-white transition-shadow duration-300 ${
        hovering
          ? "shadow-lg"
          : "shadow-md"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-xl font-bold text-black hover:text-blue-600 transition-colors">
          <Link to="/">Eswaran</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 font-medium text-black text-base">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-black hover:text-blue-600 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow rounded-b-lg px-6">
          <ul className="flex flex-col space-y-6 py-6 text-center font-medium text-lg text-black">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block hover:text-blue-600 transition-colors duration-300"
                >
                  {name}
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
