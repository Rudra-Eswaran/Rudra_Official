import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white px-4 py-12">
      {/* Card */}
      <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-10 flex flex-col items-center space-y-10 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-wide">
          Welcome to My Portfolio
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl max-w-md">
          I’m Eswaran, a passionate Java developer skilled in building efficient and scalable applications. Connect with me on LinkedIn or GitHub below.
        </p>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/eswaran-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <FaLinkedin size={28} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="http://github.com/Eswaran-IT/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-800 font-semibold hover:text-black transition-colors"
          >
            <FaGithub size={28} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
