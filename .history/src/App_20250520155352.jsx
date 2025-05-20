import React from 'react';

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
  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-5xl font-semibold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-8">
          I am a passionate Java developer eager to grow and contribute. Skilled in Java, Spring Boot,
          AWS, and API development. I focus on writing clean, efficient code and solving challenging problems.
        </p>

        <h2 className="text-3xl font-semibold mb-5">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white bg-opacity-20 px-5 py-2 rounded-full text-white font-medium text-sm hover:bg-opacity-40 transition duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
