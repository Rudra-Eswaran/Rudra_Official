// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Eswaran</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-teal-400">Portfolio</Link></li>
          <li><Link to="/business" className="hover:text-teal-400">Business</Link></li>
          <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
          <li><Link to="/team" className="hover:text-teal-400">Team R</Link></li>
          <li><Link to="/analysis" className="hover:text-teal-400">Analysis</Link></li>
          <li><Link to="/support" className="hover:text-teal-400">Support</Link></li>
          <li><Link to="/products" className="hover:text-teal-400">Products</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
