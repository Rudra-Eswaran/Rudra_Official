import React, { useEffect, useState } from "react";
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
  const [loading] = useState(true); // loading always true

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 800,
        offset: 120,
        easing: "ease-in-out",
        once: false,
      });
    }
  }, [loading]);

  return (
    <section id="services" className="relative bg-blue-600 text-white py-20 px-4 min-h-screen">
      {/* Header always on top */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" data-aos={!loading ? "fade-down" : undefined}>
          Our Services
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto" data-aos={!loading ? "fade-up" : undefined}>
          Empowering digital success through expert solutions and innovation.
        </p>
      </div>

      {/* Services container with blur while loading */}
      <div className="max-w-6xl mx-auto relative">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 transition-filter duration-500 ${
            loading ? "filter blur-sm brightness-50 pointer-events-none" : "filter-none pointer-events-auto"
          }`}
        >
          {services.map(({ id, title, icon, direction }, index) => (
            <div
              key={id}
              data-aos={!loading ? direction : undefined}
              data-aos-delay={!loading ? index * 100 : undefined}
              className="bg-white text-blue-700 rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          ))}
        </div>

        {/* Loader overlay inside services container, always visible above content */}
        {loading && (
          <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex flex-col items-center justify-center rounded-xl z-50 pointer-events-auto">
            <div className="inline-block w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-2xl font-bold text-white">Services Loading Soon</h3>
            <p className="text-blue-200 mt-2 text-center max-w-xs px-4">
              We’re preparing powerful solutions for you. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
