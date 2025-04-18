import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Edtech = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Adjust animation duration
      once: false, // Keep animation active on re-entry
      mirror: true, // Mirror animation when scrolling back
      offset: 100, // Set the offset for triggering animation
    });

    // Simulating loading for 2 seconds (You can replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    AOS.refresh(); // Refresh AOS after content is loaded
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 relative"
      data-aos="fade-up" // Animation trigger for the section
    >
      {/* Displaying Loading State */}
      {isLoading ? (
        <div className="absolute flex flex-col items-center justify-center space-y-4">
          {/* Preloader Spinner */}
          <div className="w-16 h-16 border-4 border-t-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-800 font-semibold">Processing...</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-purple-800">EdTech Services</h1>
          <p className="text-lg text-gray-600 mt-4">We are preparing something amazing for you!</p>
        </div>
      )}
    </section>
  );
};

export default Edtech;
