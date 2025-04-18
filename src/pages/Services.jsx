import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../servicesData";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-4 min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold text-blue-700 mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up">
          Explore the wide range of IT services we provide to empower your digital journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-6 min-h-[260px]"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
