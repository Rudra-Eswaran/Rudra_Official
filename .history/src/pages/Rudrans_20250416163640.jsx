import React, { useState } from "react";
import teamData from "../teamData.json"; // Assuming teamData.json is in the same folder

const Rudrans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous team member (or loop around)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamData.length - 1));
  };

  // Navigate to next team member (or loop around)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < teamData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section id="team" className="relative w-full min-h-screen bg-gray-100">
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 text-4xl text-gray-800 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#8592;
      </button>

      {/* Team Member Slides */}
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {teamData.map((member, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className={`w-32 h-32 rounded-full mb-4 object-cover ${member.role === "Leader" ? "border-4 border-yellow-500" : ""}`}
              />
              <h3 className="text-3xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-xl text-gray-600 mb-2">{member.role}</p>
              <p className="text-lg text-gray-500 mb-4">{member.bio}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 text-4xl text-gray-800 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#8594;
      </button>
    </section>
  );
};

export default Rudrans;
