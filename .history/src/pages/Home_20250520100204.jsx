import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center px-4">
      
      {/* Large Text */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 tracking-widest mb-6">
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
          className="text-blue-700 underline font-medium hover:text-blue-900 transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="http://github.com/Eswaran-IT/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 underline font-medium hover:text-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
