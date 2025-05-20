import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-xl font-semibold mt-2">Eswaran Suyamprakasam</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-center md:text-left text-lg">Contact Us</h4>
            <ul className="flex flex-col md:flex-row md:justify-around md:space-x-6 text-center md:text-left text-sm md:text-base">
              <li>
                <p>
                  Email: <span className="text-blue-200">eswar2003.it@gmail.com</span>
                </p>
              </li>
              <li>
                <p>
                  Phone: <span className="text-blue-200">+91 9345152042</span>
                </p>
              </li>
              <li>
                <p>
                  Address: <span className="text-blue-200">Tamil Nadu, India</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-6 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Eswaran Suyamprakasam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
