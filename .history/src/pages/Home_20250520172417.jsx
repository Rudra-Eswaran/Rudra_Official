import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div import { useState } from "react";
    import { FiMenu, FiX } from "react-icons/fi";
    
    const Navbar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [hovering, setHovering] = useState(false);
    
      const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    
      const menuItems = [
        { name: "About", path: "#about" },
        { name: "Projects", path: "#projects" },
        { name: "Certifications", path: "#certifications" },
        { name: "Team", path: "#team" },
        { name: "Services", path: "#services" },
        { name: "Contact", path: "#contact" },
      ];
    
      return (
        <nav 
          className={`fixed w-full top-0 left-0 z-50 mt-4 px-6 rounded-lg bg-white transition-shadow duration-300 ${
            hovering ? "shadow-lg" : "shadow-md"
          }`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center h-14">
            {/* Logo */}
            <div className="text-xl font-bold text-black hover:text-blue-600 transition-colors">
              <a href="#home">Eswaran</a>
            </div>
    
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-12 font-medium text-black text-base">
              {menuItems.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
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
                    <a
                      href={path}
                      onClick={toggleMenu}
                      className="block hover:text-blue-600 transition-colors duration-300"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      );
    };
    
    export default Navbar;
     className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
        Hey you, I’m{" "}
        <span className="text-[#3366CC] font-extrabold">
          <Typewriter
            words={["Eswaran"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>

      <div className="flex items-center justify-center gap-8">
        {/* Get CV - always show icon + text */}
        <a
          href="/assets/Eswaran%20S_Resume_IT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#3366CC] text-white px-4 py-2 rounded-lg font-extrabold hover:bg-[#254c99] transition"
        >
          <FaDownload size={20} />
          <span>Get CV</span>
        </a>

        {/* LinkedIn - icon always, text hidden on small */}
        <a
          href="https://linkedin.com/in/eswaran-s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#0A66C2] font-medium hover:text-[#084a8b] transition"
        >
          <FaLinkedin size={24} />
          <span className="hidden md:inline">LinkedIn</span>
        </a>

        {/* GitHub - icon always, text hidden on small */}
        <a
          href="https://github.com/Eswaran-IT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black font-medium hover:text-gray-700 transition"
        >
          <FaGithub size={24} />
          <span className="hidden md:inline">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
