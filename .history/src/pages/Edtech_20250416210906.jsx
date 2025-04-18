import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Edtech = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Simulate loading state for 2 seconds (you can adjust this or replace it with your own logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    AOS.refresh(); // important!
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 relative"
      data-aos="fade-up"
    >
      {/* Loading spinner */}
      {isLoading ? (
        <div className="absolute flex flex-col items-center justify-center space-y-4">
          <div className="spinner-border animate-spin w-16 h-16 border-4 border-t-4 border-t-purple-600 border-gray-300 rounded-full"></div>
          <p className="text-xl text-purple-800">Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-6xl mb-6">🚀📚</div>
          <h1 className="text-4xl font-semibold text-purple-800">EdTech Services</h1>
          <p className="text-lg text-gray-600 mt-4">We are preparing something amazing for you!</p>
          <div className="mt-6 text-3xl">🔧💡👩‍🏫</div>
        </div>
      )}
    </section>
  );
};

export default Edtech;
