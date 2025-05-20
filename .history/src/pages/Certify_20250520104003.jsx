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
      // Try loading max 10 images, break if not found
      for (let i = 1; i <= 10; i++) {
        const url = `/Certificates/${folder}/C${i}.jpg`;
        images.push(url);
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

  // Image onError hides broken images, filter out hidden images to avoid empty display
  const visibleCertificates = certificates.filter(Boolean);

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-black mb-8 select-none">CERTIFICATES</h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mb-8">
        {certificateCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-sm font-extrabold transition-colors duration-300 text-black
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-600 hover:text-white"
              }`}
            style={{ border: "none" }}
          >
            {formatCategoryName(cat)}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-3xl h-[480px] bg-black rounded-lg shadow-lg overflow-hidden select-none">
        <AnimatePresence mode="wait">
          {certificates.length > 0 ? (
            <motion.img
              key={certificates[currentIndex]}
              src={certificates[currentIndex]}
              alt={`${activeCategory} Certificate ${currentIndex + 1}`}
              className="w-full h-full object-contain p-6 bg-white"
              initial={{ opacity: 0, x: certificates.length > 1 ? 50 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: certificates.length > 1 ? -50 : 0 }}
              transition={{ duration: certificates.length > 1 ? 0.5 : 0 }}
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <motion.p
              className="text-center text-white text-xl mt-24"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition"
              aria-label="Previous certificate"
            >
              <FaArrowLeft size={18} />
            </button>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition"
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
