import React, { useState } from "react";
import awsIcon from "../assets/aws.png";
import javaIcon from "../assets/java.svg";
import katalonIcon from "../assets/katalon.png";
import reactIcon from "../assets/react.png";
import springIcon from "../assets/spring.svg";
import pythonIcon from "../assets/python.svg";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";



export default function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects =
    selectedCat === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Title */}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">My Projects</h1>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Categories as pills */}
        <nav className="flex gap-4 flex-wrap mb-6 md:flex-col md:w-48">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-colors
                ${
                  selectedCat === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Projects stack */}
        <main className="flex-1 flex flex-col gap-6">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                >
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      project.title.includes("AWS") ||
                      project.title.includes("SmartBridge")
                        ? "text-blue-700"
                        : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <FaGithub className="text-gray-600 hover:text-gray-900 w-6 h-6" />
                </motion.a>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-20">
                No projects found in this category.
              </p>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
