// Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-blue-900 text-center px-4 mt-0">
      {/* Large Text */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-widest mb-6">
        Get in Touch
      </h1>

      {/* Buttons and Links */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
        {/* Get CV Button */}
        <a
          href="/path-to-your-cv.pdf"
          download
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get CV
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/eswaran-s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline font-medium hover:text-blue-600 transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="http://github.com/Eswaran-IT/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 underline font-medium hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
