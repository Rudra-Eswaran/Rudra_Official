import React, { useState, useEffect } from "react";
import awsIcon from "../assets/aws.png";
import javaIcon from "../assets/java.svg";
import katalonIcon from "../assets/katalon.png";
import reactIcon from "../assets/react.png";
import springIcon from "../assets/spring.svg";
import pythonIcon from "../assets/python.svg";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  "All",
  "AWS",
  "Software Testing",
  "Java",
  "Spring Boot",
  "React",
  "Python",
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
    icon: pythonIcon,
    category: "Python",
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
    title: "Spring Framework Code",
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

  useEffect(() => {
     AOS.init({ duration: 800, once: false });
  AOS.refresh(); // refresh to recalc on route changes or updates
  }, []);

  const filteredProjects =
    selectedCat === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Title */}
      <header className="mb-8 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold text-gray-900"><PROJECTS</h1>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Categories as pills */}
        <nav
          className="flex gap-4 flex-wrap mb-6 md:flex-col md:w-48"
          data-aos="fade-right"
        >
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

        {/* Projects stack with scrollbar */}
        <main
          className="flex-1 flex flex-col gap-6 max-h-[600px] overflow-y-auto"
          data-aos="fade-left"
        >
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
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
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
              <p className="text-center text-gray-500 mt-20" data-aos="fade-up">
                No projects found in this category.
              </p>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
