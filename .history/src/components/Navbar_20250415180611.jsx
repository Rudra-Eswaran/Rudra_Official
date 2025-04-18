import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Business", path: "/business" },
    { name: "Blog", path: "/blog" },
    { name: "Team R", path: "/team" },
    { name: "Analysis", path: "/analysis" },
    { name: "Support", path: "/support" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">Eswaran</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-teal-400 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-1 px-2 rounded hover:bg-teal-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
