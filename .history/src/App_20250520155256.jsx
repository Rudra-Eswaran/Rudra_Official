import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center p-6">
      <div className="text-white text-center max-w-xl">
        <h1 className="text-4xl font-semibold mb-4">About Me</h1>
        <p className="text-lg mb-6">
          I am a passionate Java developer seeking new opportunities to grow and contribute.
          Skilled in Java, Spring Boot, AWS, and API development. Dedicated to writing clean,
          efficient code and solving challenging problems.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-lg">
          {[
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
            'REST API Development'
          ].map((skill) => (
            <li key={skill} className="bg-blue-800 rounded px-3 py-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
