import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Edtech = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with settings
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Allows re-triggering every time the section enters the view
      offset: 150, // Adjust trigger point
    });

    // Simulate loading state for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Refresh AOS on mount or re-mount
    AOS.refresh();

    return () => {
      AOS.refresh(); // Cleanup
    };
  }, []);

  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 relative"
    >
      {/* Loading State */}
      {isLoading ? (
        <div className="absolute flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-800 font-semibold">Processing...</p>
        </div>
      ) : (
        <div
          className="text-center"
          data-aos="fade-up"
        >
          {/* Edtech Main Title */}
          <h1
            className="text-4xl font-semibold text-purple-800 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EdTech Services
          </h1>

          {/* Edtech Description */}
          <p
            className="text-lg text-gray-600 mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We provide innovative solutions in the EdTech space with a focus on Cloud-based learning platforms, AI-powered educational tools, and cutting-edge Machine Learning technologies.
          </p>

          {/* Additional Content */}
          <div
            className="text-lg font-semibold text-purple-700"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="mb-4">
              Our services are tailored to meet the needs of both educators and students, delivering a personalized and interactive learning experience.
            </p>
            <p>
              Join us today to explore a world of educational opportunities powered by technology!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Edtech;
