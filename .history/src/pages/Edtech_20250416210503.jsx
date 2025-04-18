import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Edtech = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      id="edtech"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-200 px-4"
    >
      <div
        data-aos="fade-up"
        className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-lg"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">EdTech</h1>
        <p className="text-xl text-gray-700 mb-6">Coming Soon 🚀</p>
        <p className="text-gray-500">
          We're working hard on building amazing educational tech content and tools. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default Edtech;
