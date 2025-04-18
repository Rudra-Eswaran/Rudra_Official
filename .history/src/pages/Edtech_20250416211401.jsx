import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaCloud, FaRobot, FaLaptopCode } from "react-icons/fa"; // Icons for Cloud, AI/ML, and Software Development

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

          {/* Edtech Services Icons and Short Descriptions */}
          <div className="flex space-x-8 justify-center">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaCloud className="text-5xl text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold text-purple-800">Cloud Learning</h3>
              <p className="text-gray-600">Flexible online education solutions.</p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaRobot className="text-5xl text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold text-purple-800">AI & ML</h3>
              <p className="text-gray-600">Personalized learning experiences.</p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold text-purple-800">Software Dev</h3>
              <p className="text-gray-600">Custom educational platforms.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Edtech;
