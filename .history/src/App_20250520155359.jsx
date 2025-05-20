import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  'Java',
  'AWS',
  'Python',
  'Automation',
  'Testing Selenium',
  'Git',
  'GitHub',
  'Docker',
  'Design (Figma, Canva)',
  'Spring Boot',
  'REST API Development',
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg text-white mr-12"
      >
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed">
          Passionate Java developer focused on delivering clean, scalable code.
          Experienced with AWS, Spring Boot, API development, and automation testing.
          Eager to contribute and grow in dynamic tech environments.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h2 className="text-4xl font-semibold text-white mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white bg-opacity-20 text-white rounded-full py-3 px-6 text-center font-medium cursor-default hover:bg-opacity-40 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
