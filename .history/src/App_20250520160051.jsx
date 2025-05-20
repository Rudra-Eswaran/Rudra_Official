import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaJava,
  FaAws,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCogs,
} from 'react-icons/fa';
import {
  SiSelenium,
  SiSpringboot,
  SiCanva,
  SiRest,
} from 'react-icons/si';

const skillsWithIcons = [
  { name: 'Java', icon: <FaJava size={24} /> },
  { name: 'AWS', icon: <FaAws size={24} /> },
  { name: 'Python', icon: <FaPython size={24} /> },
  { name: 'Automation', icon: <FaCogs size={24} /> },
  { name: 'Testing Selenium', icon: <SiSelenium size={24} /> },
  { name: 'Git', icon: <FaGitAlt size={24} /> },
  { name: 'GitHub', icon: <FaGithub size={24} /> },
  { name: 'Docker', icon: <FaDocker size={24} /> },
  { name: 'Design (Figma)', icon: <FaFigma size={24} /> },
  { name: 'Design (Canva)', icon: <SiCanva size={24} /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={24} /> },
  { name: 'REST API Development', icon: <SiRest size={24} /> },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="bg-blue-600 min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-lg text-white text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <p className="text-lg leading-relaxed">
          We are a passionate tech team specializing in scalable, clean code development using Java, AWS, and Spring Boot.
          Skilled in automation, REST APIs, and UI design. We build with purpose and precision.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-xl w-full"
      >
        <h2 className="text-3xl font-semibold text-white mb-6 text-center md:text-left">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skillsWithIcons.map(({ name, icon }, index) => (
            <div
              key={name}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
              className="bg-white bg-opacity-20 text-white rounded-full py-3 px-6 flex items-center gap-3 justify-center font-medium cursor-default hover:bg-opacity-40 transition duration-300"
            >
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
