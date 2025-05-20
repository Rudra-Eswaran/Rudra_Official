import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const certificateCategories = [
  "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar",
  "GUVI", "INFOSYS", "INTERNSHALA", "ISTE", "Linkedin", "MICROSOFT",
  "NPTEL", "OTHERS", "SCALER", "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
];

const formatCategoryName = (name) =>
  name
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState(certificateCategories[0]);
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadCertificates = () => {
      const folder = activeCategory;
      const images = [];
      for (let i = 1; i <= 10; i++) {
        images.push(`/Certificates/${folder}/C${i}.jpg`);
      }
      setCertificates(images);
      setCurrentIndex(0);
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
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold uppercase text-black mb-6 select-none">
        Certificates
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mb-6">
        {certificateCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md font-bold uppercase transition-colors duration-300
              ${
                activeCategory === cat
                  ? "bg-white text-[#004aad] shadow-md"
                  : "bg-white/90 text-black hover:bg-[#004aad] hover:text-white"
              }`}
          >
            {formatCategoryName(cat)}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-3xl h-[450px] bg-white rounded-lg shadow-lg overflow-hidden select-none">
        <AnimatePresence mode="wait">
          {certificates.length > 0 && (
            <motion.img
              key={certificates[currentIndex]}
              src={certificates[currentIndex]}
              alt={`${activeCategory} Certificate ${currentIndex + 1}`}
              className="w-full h-full object-contain p-6"
              initial={{ opacity: 0, x: certificates.length > 1 ? 100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: certificates.length > 1 ? -100 : 0 }}
              transition={{ duration: certificates.length > 1 ? 0.5 : 0 }}
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          {certificates.length === 0 && (
            <motion.p
              className="text-center font-bold uppercase text-gray-700 text-xl mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No certificates found.
            </motion.p>
          )}
        </AnimatePresence>

        {certificates.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#004aad] hover:bg-[#003580] text-white p-3 rounded-full shadow-md transition"
              aria-label="Previous certificate"
            >
              <FaArrowLeft size={18} />
            </button>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#004aad] hover:bg-[#003580] text-white p-3 rounded-full shadow-md transition"
              aria-label="Next certificate"
            >
              <FaArrowRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Certify;
whole 