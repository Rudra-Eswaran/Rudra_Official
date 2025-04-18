import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Edtech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,         // ❗ allow animations every time it comes into view
      mirror: true,        // animate again when scrolling back up
    });

    AOS.refresh();         // reinitializes AOS on render
  }, []);

  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-50"
      data-aos="zoom-in"
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-800 mb-6">
          EdTech
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 tracking-wide">
          🚧 Coming Soon 🚀
        </p>
      </div>
    </section>
  );
};

export default Edtech;
