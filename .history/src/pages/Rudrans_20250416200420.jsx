import React, { useState } from 'react';
import teamData from './data/teamData.json'; // adjust the path if needed

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

  return (
    <div className="relative w-full h-screen bg-gray-200 overflow-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 w-full h-full">
          <img
            src={teamData[currentIndex].photo}
            alt={teamData[currentIndex].name}
            className="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <h2 className="text-3xl font-bold">{teamData[currentIndex].name}</h2>
          <p className="text-xl text-gray-600">{teamData[currentIndex].role}</p>
          <p className="mt-4 text-center text-gray-800">{teamData[currentIndex].bio}</p>
          <div className="mt-4 flex space-x-4">
            <a
              href={teamData[currentIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={teamData[currentIndex].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-4 rounded-full hover:bg-gray-700"
      >
        &#8592;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-4 rounded-full hover:bg-gray-700"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Rudrans;
