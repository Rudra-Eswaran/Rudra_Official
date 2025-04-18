import React from "react";
import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi"; // Failure Icon

const Failure= ({ onClose }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm w-full relative"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <FiXCircle size={20} />
      </button>
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FiXCircle size={30} className="text-red-500" />
        <div>
          <h4 className="text-xl font-bold mb-2 text-blue-600">Something Went Wrong!</h4>
          <p>We couldn’t send your message. Please try again.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Failure;
