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
  {
    title: "Car Management System",
    description: "A system for managing car services and rentals.",
    link: "https://github.com/Eswaran-IT/CarManagementSystem",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Prediction System",
    description: "A machine learning project for making predictions based on data.",
    link: "https://github.com/Eswaran-IT/PredictionSystem",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "To-Do App",
    description: "A simple to-do app to manage daily tasks efficiently.",
    link: "https://github.com/Eswaran-IT/ToDoApp",
    icon: reactIcon,
    category: "React",
  },
  {
    title: "Library Management System",
    description: "A Java-based system for managing library books and members.",
    link: "https://github.com/Eswaran-IT/Core-Java-Projects/tree/main/Library_Management_System",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Cloud Automated Report",
    description: "Automates weekly report generation using AWS services.",
    link: "https://github.com/Eswaran-IT/Cloud-Automated-Report",
    icon: awsIcon,
    category: "AWS",
  },
  {
    title: "ATM Interface",
    description: "A simple Java project that simulates ATM functionalities.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/atm_interface",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Grade Calculator",
    description: "A Java program to calculate student grades based on scores.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/grade_calculator",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Random Number Generator",
    description: "A small project to generate random numbers using Java.",
    link: "https://github.com/Eswaran-IT/CODSOFT/tree/main/random_Number_Generator",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Code Challenge 60 Days",
    description: "A repository containing my daily coding challenges.",
    link: "https://github.com/Eswaran-IT/Code_Challenge-90days",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "Spring Framework Projects",
    description: "Various projects demonstrating Spring Framework capabilities.",
    link: "https://github.com/Eswaran-IT/Spring-Framework-",
    icon: springIcon,
    category: "Spring Boot",
  },
  {
    title: "Spring Boot Projects",
    description: "A collection of Spring Boot applications for different use cases.",
    link: "https://github.com/Eswaran-IT/SpringBoot",
    icon: springIcon,
    category: "Spring Boot",
  },
  {
    title: "Advanced Java Projects",
    description: "Projects demonstrating advanced Java concepts.",
    link: "https://github.com/Eswaran-IT/Java_Advance",
    icon: javaIcon,
    category: "Java",
  },
  {
    title: "SmartBridge Testing Project",
    description: "A software testing project developed as part of an internship.",
    link: "https://github.com/Eswaran-IT/SmartBridge_Testing_Project",
    icon: katalonIcon,
    category: "Software Testing",
  },
];

export default function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects =
    selectedCat === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Title */}
      <header className="py-8 bg-white shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          My Projects
        </h1>
      </header>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-2/5 bg-white shadow-inner p-6 overflow-auto">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Categories</h2>
          <ul className="flex flex-col gap-4">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCat(cat)}
                  className={`w-full text-left px-4 py-3 rounded-md font-medium text-sm transition-colors ${
                    selectedCat === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Projects */}
        <main className="w-3/5 p-6 overflow-y-auto space-y-6">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-6 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-[1.03]"
                >
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex flex-col flex-grow">
                    <h3
                      className={`text-2xl font-semibold ${
                        project.title.includes("AWS") ||
                        project.title.includes("SmartBridge")
                          ? "text-blue-700"
                          : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{project.description}</p>
                  </div>
                  <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-900" />
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
