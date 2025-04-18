import React, { useEffect, useState } from "react";

// Importing the team data from the JSON file
import teamData from "./teamData.json"; // Assuming teamData.json is in the same folder

const Rudrans = () => {
  const [team, setTeam] = useState([]);

  // Load the team data
  useEffect(() => {
    setTeam(teamData); // This would be an API call in a real-world app
  }, []);

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">Meet the Rudrans Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                member.role === "Leader" ? "border-4 border-yellow-500 scale-105" : ""
              }`}
            >
              <img
                src={member.photo}
                alt={member.name}
                className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover ${
                  member.role === "Leader" ? "border-4 border-yellow-500 scale-110" : ""
                }`}
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500 mb-4">{member.bio}</p>

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
    </section>
  );
};

export default Rudrans;
