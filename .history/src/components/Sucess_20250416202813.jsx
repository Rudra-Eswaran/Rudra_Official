import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

const Failure = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the failure message after 3 seconds
    }, 3000); // 3 seconds timer

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [onClose]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-red-500 p-6 rounded-lg text-white flex items-center space-x-4 shadow-xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <FiXCircle size={30} />
        <span className="font-semibold">Something went wrong. Try again!</span>
      </motion.div>
    </motion.div>
  );
};

export default Failure;
