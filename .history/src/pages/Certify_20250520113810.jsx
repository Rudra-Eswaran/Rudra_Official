import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    const loadCertificates = async () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = [];

      for (let i = 1; i <= numCertificates; i++) {
        try {
          const img = await import(`../assets/Certificates/${activeCategory}/C${i}.jpg`);
          images.push(img.default);
        } catch (err) {
          console.warn(`Missing image: ${activeCategory}/C${i}.jpg`);
        }
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

  // Animation variants for text block
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for image slider
  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={ref}
      className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-blue-700 text-white p-4"
    >
      {/* Text section */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Certificates
        </h2>

        <div
          className="text-lg md:text-xl font-semibold bg-blue-800 px-4 py-2 rounded-lg shadow-md text-white mb-4"
        >
          Total Certificates: {totalCertificates}
        </div>

        <div className="w-full flex justify-center flex-wrap gap-2 max-w-5xl mb-4">
          {Object.keys(certificateMap).map((category) => (
            <button
              key={category}
              className={`px-3 py-1 text-sm md:text-base font-semibold rounded-lg transition duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-500"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category} ({certificateMap[category]})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Image slider section */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sliderVariants}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-2xl aspect-w-4 aspect-h-3 bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden border-4 border-blue-600 p-6"
      >
        {certificates.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        ) : (
          <p className="text-center text-blue-900 text-xl">
            No certificates available.
          </p>
        )}

        {certificates.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowLeft size={18} className="text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowRight size={18} className="text-white" />
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Certify;
