import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
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

      <div className="flex flex-col md:flex-row gap-8">
        {/* Get CV (thick blue background & white text) */}
        <a
          href="/assets/Eswaran%20S_Resume_IT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#3366CC] text-white px-6 py-3 rounded-lg font-extrabold hover:bg-[#254c99] transition"
        >
          <FaDownload size={20} />
          Get CV
        </a>

        {/* LinkedIn (normal color & font weight) */}
        <a
          href="https://linkedin.com/in/eswaran-s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[#0A66C2] font-medium hover:text-[#084a8b] transition"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>

        {/* GitHub (normal black color & font weight) */}
        <a
          href="https://github.com/Eswaran-IT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-black font-medium hover:text-gray-700 transition"
        >
          <FaGithub size={24} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
