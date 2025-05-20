import React, { useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rudrans = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center gap-3 mb-4">
        <FaLaptopCode size={32} className="text-blue-600 animate-pulse" data-aos="fade-right" />
        <h1 className="text-blue-600 font-semibold text-3xl" data-aos="fade-left">
          Rudrans Tech Team
        </h1>
      </div>

      {/* Updated loader: 3 bouncing dots */}
      <div className="dot-loader mb-2" data-aos="zoom-in">
        <div></div><div></div><div></div>
      </div>

      <p className="text-gray-500 text-sm mt-2" data-aos="fade-up">
        Please wait, setting up tech magic...
      </p>

      <style jsx>{`
        .dot-loader {
          display: flex;
          gap: 8px;
          justify-content: center;
        }
        .dot-loader div {
          width: 12px;
          height: 12px;
          background-color: #2563eb;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .dot-loader div:nth-child(1) {
          animation-delay: -0.32s;
        }
        .dot-loader div:nth-child(2) {
          animation-delay: -0.16s;
        }
        .dot-loader div:nth-child(3) {
          animation-delay: 0;
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Rudrans;
