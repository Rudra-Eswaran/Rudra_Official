import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 flex flex-col justify-between min-h-[200px]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 flex-grow">
        {/* Logo */}
        <div className="text-center md:text-left px-4">
          <p className="text-xl font-semibold mt-2">Eswaran Suyamprakasam</p>
        </div>

        {/* Contact */}
        <div className="px-4">
          <h4 className="font-bold mb-2">Contact Us</h4>
          <ul>
            <li>
              <p className="text-sm">
                Email: <span className="text-blue-200">eswar2003.it@gmail.com</span>
              </p>
            </li>
            <li>
              <p className="text-sm">
                Phone: <span className="text-blue-200">+91 9345152042</span>
              </p>
            </li>
            <li>
              <p className="text-sm">
                Address: <span className="text-blue-200">Tamil Nadu, India</span>
              </p>
            </li>
          </ul>
        </div>

        {/* Social Media Icons with white bg and black icons/text by default, blue bg with white on hover */}
        <div className="mt-6 md:mt-0 flex space-x-6 justify-center px-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 rounded bg-white text-white hover:bg-blue-700 hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 rounded bg-white text-white hover:bg-blue-700 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Section - copyright at bottom margin */}
      <div className="text-center mt-4 mb-0 px-4">
        <p className="text-sm m-0">
          &copy; {new Date().getFullYear()} Eswaran Suyamprakasam. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
