import React, { useState } from "react";
import awsIcon from "../assets/aws.png";
import javaIcon from "../assets/java.svg";
import katalonIcon from "../assets/katalon.png";
import reactIcon from "../assets/react.png";
import springIcon from "../assets/spring.svg";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "AWS",
  "Software Testing",
  "Java",
  "Spring Boot",
  "React",
];

const projects = [
  // Add your projects here, keep category prop for filtering
  {
    title: "Cloud Automated Report",
    description: "Automates weekly report generation using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Automated-Report",
    icon: awsIcon,
    category: "AWS",
  },
  {
    title: "SmartBridge Testing Project",
    description: "A software testing project developed as part of an internship.",
    link: "https://github.com/Eswaran-IT/SmartBridge_Testing_Project",
    icon: katalonIcon,
    category: "Software Testing",
  },
  // ... other projects with categories like "Java", "Spring Boot", "React"
];

export default function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects =
    selectedCat === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar: 4% width */}
      <aside className="w-[4%] min-w-[80px] bg-gray-100 py-6 flex flex-col items-center gap-4 overflow-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`text-xs rotate-[-90deg] origin-left whitespace-nowrap px-2 py-1 rounded ${
              selectedCat === cat
                ? "bg-blue-600 text-white font-bold"
                : "text-gray-700 hover:bg-blue-300"
            }`}
            onClick={() => setSelectedCat(cat)}
            title={cat}
          >
            {cat}
          </button>
        ))}
      </aside>

      {/* Projects area: 96% width */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          My Projects
        </h1>

        <div className="flex flex-col items-center gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`w-96 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer border-4
                ${
                  // Highlight AWS & SmartBridge projects
                  project.category === "AWS" || project.title.includes("SmartBridge")
                    ? "border-blue-600"
                    : "border-transparent"
                }
                hover:scale-105 hover:shadow-2xl transition-transform`}
              >
                <img src={project.icon} alt={project.title} className="w-20 h-20 mb-4" />
                <h2 className="text-xl font-semibold text-center mb-2 text-blue-700">
                  {project.title}
                </h2>
                <p className="text-center text-gray-600 mb-4">{project.description}</p>
                <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
