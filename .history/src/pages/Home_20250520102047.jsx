import React from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-12">
      {/* Card */}
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 flex flex-col items-center space-y-8">
        {/* Large Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-wide">
          Get in Touch
        </h1>

        {/* Buttons and Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
          {/* Get CV Button - open in new tab */}
          <a
            href="/assets/Eswaran%20S_Resume_IT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
          >
            <FaFileDownload size={20} />
            Get CV
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/eswaran-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="http://github.com/Eswaran-IT/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-black transition-colors"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
