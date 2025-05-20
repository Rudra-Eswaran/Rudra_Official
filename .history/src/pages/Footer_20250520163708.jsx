import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
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

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-6 justify-center px-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              style={{ color: "#1877F2" }} // Facebook Blue
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              style={{ color: "#1DA1F2" }} // Twitter Blue
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              style={{ color: "#0077B5" }} // LinkedIn Blue
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              style={{ color: "#333" }} // GitHub Dark
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 px-4">
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
