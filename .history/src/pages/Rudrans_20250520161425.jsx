import React, { useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rudrans = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-white"
      data-aos="fade-up"
    >
      <div className="flex items-center gap-3 mb-4" data-aos="zoom-in">
        <FaLaptopCode size={32} className="text-blue-600 animate-pulse" />
        <h1 className="text-blue-600 font-semibold text-3xl" data-aos="fade-left">
          Rudrans Tech Team
        </h1>
      </div>

      <div className="spinner mb-2" data-aos="fade-right"></div>
      <p className="text-gray-500 text-sm mt-2" data-aos="fade-up">
        Please wait, setting up tech magic...
      </p>

      <style jsx>{`
        .spinner {
          border: 6px solid #e5e7eb;
          border-top: 6px solid #2563eb;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Rudrans;
