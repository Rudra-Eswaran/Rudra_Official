import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src="path_to_your_logo.gif" alt="Logo" className="h-12 w-auto" />
            <p className="text-xl font-semibold mt-2">Your Company Name</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul>
                <li>
                  <Link to="/" className="hover:text-blue-200">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-blue-200">Portfolio</Link>
                </li>
                <li>
                  <Link to="/business" className="hover:text-blue-200">Business</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-200">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-200">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-2">Contact Us</h4>
              <ul>
                <li>
                  <p className="text-sm">Email: <span className="text-blue-200">info@company.com</span></p>
                </li>
                <li>
                  <p className="text-sm">Phone: <span className="text-blue-200">+1 (123) 456-7890</span></p>
                </li>
                <li>
                  <p className="text-sm">Address: <span className="text-blue-200">1234 Company St., City, Country</span></p>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
