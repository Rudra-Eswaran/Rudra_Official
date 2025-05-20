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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-2/5 bg-white shadow-lg flex flex-col py-8 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Categories
        </h2>
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`py-3 px-5 rounded-lg text-lg font-semibold text-center transition-colors ${
                selectedCat === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects area */}
      <div className="w-3/5 overflow-y-auto p-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          My Projects
        </h1>
        <div className="flex flex-col gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 hover:shadow-2xl hover:scale-[1.02] transition-transform"
              >
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex flex-col flex-grow">
                  <h3
                    className={`text-2xl font-bold ${
                      project.title.includes("AWS") ||
                      project.title.includes("SmartBridge")
                        ? "text-blue-700"
                        : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
                <FaGithub className="text-gray-700 w-7 h-7 hover:text-black" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
