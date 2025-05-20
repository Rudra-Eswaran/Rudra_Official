import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 py-12 text-center">
      {/* Greeting */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-black tracking-wide mb-4">
        Hey You,
      </h1>

      {/* Introduction */}
      <h2 className="text-5xl md:text-6xl font-semibold text-black mb-6">
        I’m Eswaran
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-gray-800 text-lg md:text-xl mb-10 px-4">
        A neat and professional Java developer passionate about building efficient and scalable applications.
      </p>

      {/* Links */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/eswaran-s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          <FaLinkedin size={32} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="http://github.com/Eswaran-IT/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-800 font-semibold hover:text-black transition-colors"
        >
          <FaGithub size={32} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
