import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const certificateMap = {
  AICTE: 3, AWS: 1, Cisco: 2, Coursera: 1, "EC-Council": 1, Geekstar: 1,
  GUVI: 3, INFOSYS: 5, INTERNSHALA: 3, ISTE: 2, Linkedin: 4, MICROSOFT: 4,
  NPTEL: 1, OTHERS: 32, SCALER: 1, TCS: 4, TRYHACKME: 3, UDEMY: 5, ZSCALER: 2,
};

const totalCertificates = Object.values(certificateMap).reduce((acc, count) => acc + count, 0);

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true, // Animate when scrolling up/down
    });
  }, []);

  useEffect(() => {
    const loadCertificates = async () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = [];
      for (let i = 1; i <= numCertificates; i++) {
        try {
          const img = await import(`../assets/Certificates/${activeCategory}/C${i}.jpg`);
          images.push(img.default);
        } catch {
          console.warn(`Missing image: ${activeCategory}/C${i}.jpg`);
        }
      }
      setCertificates(images);
      setCurrentIndex(0);
      AOS.refresh(); // Refresh after new content
    };
    loadCertificates();
  }, [activeCategory]);

  useEffect(() => {
    if (certificates.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-blue-700 text-white p-4"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        Certificates
      </h2>

      <div
        className="text-lg md:text-xl font-semibold bg-blue-800 px-4 py-2 rounded-lg shadow-md text-white mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Total Certificates: {totalCertificates}
      </div>

      <div
        className="w-full flex flex-wrap justify-center gap-2 max-w-5xl mb-6"
        data-aos="fade-left"
      >
        {Object.keys(certificateMap).map((category, idx) => (
          <button
            key={category}
            className={`px-3 py-1 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition duration-300 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            {category} ({certificateMap[category]})
          </button>
        ))}
      </div>

      <div
        className="relative w-full max-w-xl aspect-[4/3] bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden border-4 border-blue-600 p-4"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {certificates.length > 0 ? (
          <motion.img
            key={currentIndex}
            src={certificates[currentIndex]}
            alt={`Certificate ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up"
          />
        ) : (
          <p className="text-center text-blue-900 text-lg" data-aos="fade-up">
            No certificates available.
          </p>
        )}

        {certificates.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
              data-aos="fade-right"
            >
              <FaArrowLeft size={18} className="text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
              data-aos="fade-left"
            >
              <FaArrowRight size={18} className="text-white" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Certify;
