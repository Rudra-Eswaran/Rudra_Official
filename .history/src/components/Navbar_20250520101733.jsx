import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-50 mt-4 mx-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link to="/">Eswaran</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-black text-base">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="hover:text-gray-600 transition-colors">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-black"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow rounded-b-lg">
          <ul className="flex flex-col space-y-4 py-4 text-center font-medium text-lg text-black">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block hover:text-gray-600 transition-colors"
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
