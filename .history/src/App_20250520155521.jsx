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

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-blue-600 min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
      {/* Left Section - About Us */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-lg text-white text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          Passionate Java developers focused on delivering clean, scalable code.
          Experienced with AWS, Spring Boot, API development, and automation testing.
          We strive to grow and contribute in dynamic tech environments.
        </p>
      </motion.div>

      {/* Right Section - Skills */}
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
          {skills.map((skill, index) => (
            <div
              key={skill}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 150}
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

export default AboutUs;
