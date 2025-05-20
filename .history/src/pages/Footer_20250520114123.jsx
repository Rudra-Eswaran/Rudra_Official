import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Eswaran</h1>
            <p className="text-sm mt-1">My Portfolio</p>
          </div>

          {/* Email */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm">
              Email: <span className="text-blue-200">eswar2003.it@gmail.com</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-4 justify-center">
            <a
              href="https://linkedin.com/in/eswaran-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/Eswaran-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Eswaran Suyamprakasam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
