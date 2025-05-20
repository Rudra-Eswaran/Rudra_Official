import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCloud, FaCode, FaPaintBrush, FaShieldAlt, FaMobileAlt, FaDatabase } from "react-icons/fa";

const services = [
  { id: 1, title: "Cloud Solutions", icon: <FaCloud size={36} />, direction: "fade-up" },
  { id: 2, title: "Software Development", icon: <FaCode size={36} />, direction: "fade-right" },
  { id: 3, title: "UI/UX Designing", icon: <FaPaintBrush size={36} />, direction: "fade-left" },
  { id: 4, title: "Cyber Security", icon: <FaShieldAlt size={36} />, direction: "fade-down" },
  { id: 5, title: "Mobile App Development", icon: <FaMobileAlt size={36} />, direction: "zoom-in" },
  { id: 6, title: "Database Management", icon: <FaDatabase size={36} />, direction: "zoom-in-up" },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section id="services" className="bg-blue-600 text-white py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Our Services
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto" data-aos="fade-up">
          Empowering digital success through expert solutions and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos={service.direction}
            data-aos-delay={index * 100}
            className="bg-white text-blue-700 rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
