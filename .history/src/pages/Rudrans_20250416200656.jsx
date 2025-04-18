import React, { useState } from 'react';
import teamData from './data/teamData.json'; // adjust the path

const Rudrans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  const current = teamData[currentIndex];

  return (
    <div className="relative w-full min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      {/* Card */}
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <img
          src={current.photo}
          alt={current.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 mb-4 md:mb-0 md:mr-6"
        />

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{current.name}</h2>
          <p className="text-blue-600 font-semibold">{current.role}</p>
          <p className="mt-2 text-gray-700">{current.bio}</p>

          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a
              href={current.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={current.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black"
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default Rudrans;
