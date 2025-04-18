import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure AOS CSS is imported

const Edtech = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation will re-trigger when scrolling back into view
      mirror: true, // Mirror the animation when scrolling back
      offset: 100, // Offset for the trigger point
    });

    // Simulating loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    AOS.refresh(); // Refresh AOS after content is loaded
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 relative"
    >
      {/* Loading Screen */}
      {isLoading ? (
        <div className="absolute flex flex-col items-center justify-center space-y-4">
          {/* Preloader Spinner */}
          <div className="w-16 h-16 border-4 border-t-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-800 font-semibold">Processing...</p>
        </div>
      ) : (
        <div className="text-center" data-aos="fade-up">
          {/* Main Content */}
          <h1 className="text-4xl font-semibold text-purple-800 mb-4">
            EdTech Services
          </h1>
          <p className="text-lg text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="200">
            We provide cutting-edge solutions in EdTech, offering cloud-based learning platforms, AI-driven courses, and much more!
          </p>
          <div
            className="mt-6 text-lg font-semibold text-purple-700"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore our services and start your learning journey today.
          </div>
        </div>
      )}
    </section>
  );
};

export default Edtech;
