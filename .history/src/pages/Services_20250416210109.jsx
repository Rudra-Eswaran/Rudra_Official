import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/servicesData.json";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16 px-4 min-h-screen" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-blue-600 mb-4 drop-shadow-lg"
        >
          Our IT Services
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
        >
          We provide top-notch IT services tailored to your business needs. Here’s a glimpse of what we offer.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-6 text-left"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
