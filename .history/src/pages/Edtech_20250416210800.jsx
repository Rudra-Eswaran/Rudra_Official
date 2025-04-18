import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Edtech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    AOS.refresh(); // important!
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100"
      data-aos="fade-up"
    >
      <div className="text-center p-8 rounded-xl bg-white shadow-xl border border-purple-200">
        <div className="text-5xl mb-4">📚🚀</div>
        <h1 className="text-3xl font-bold text-purple-700">EdTech Services</h1>
        <p className="text-lg text-gray-600 mt-2">Coming Soon... Stay tuned! 👀</p>
        <div className="mt-4 text-2xl">🛠️💡🧠</div>
      </div>
    </section>
  );
};

export default Edtech;
