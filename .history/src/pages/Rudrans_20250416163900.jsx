import React, { useState } from "react";
import teamData from "../teamData.json"; // Assuming teamData.json is in the same folder

const Rudrans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous member
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamData.length - 1));
  };

  // Navigate to the next member
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < teamData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section id="team" className="rudrans__section">
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="rudrans__button rudrans__button--prev"
      >
        &#8592;
      </button>

      {/* Team Member Slides */}
      <div className="rudrans__slider">
        <div
          className="rudrans__slider-track"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          {teamData.map((member, index) => (
            <div
              key={index}
              className="rudrans__member"
            >
              <img
                src={member.photo}
                alt={member.name}
                className={`rudrans__member-photo ${member.role === "Leader" ? "rudrans__member-photo--leader" : ""}`}
              />
              <h3 className="rudrans__member-name">{member.name}</h3>
              <p className="rudrans__member-role">{member.role}</p>
              <p className="rudrans__member-bio">{member.bio}</p>

              <div className="rudrans__social-links">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rudrans__social-link rudrans__social-link--linkedin"
                >
                  LinkedIn
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rudrans__social-link rudrans__social-link--github"
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
        className="rudrans__button rudrans__button--next"
      >
        &#8594;
      </button>
    </section>
  );
};

export default Rudrans;
