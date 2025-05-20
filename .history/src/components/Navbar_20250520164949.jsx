import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Section anchors on page (not routes)
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-black hover:text-blue-600 transition-colors">
        Eswaran
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium text-black">
        {menuItems.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-4 text-center font-medium text-black">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={toggleMenu}
                className="block hover:text-blue-600 transition-colors duration-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
