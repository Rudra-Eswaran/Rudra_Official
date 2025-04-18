import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiX } from "react-icons/fi";  // Using react-icons for Phone, Email, Location
import { CONTACT_INFO, MODAL_MESSAGES, FORM_FIELDS, BUTTON_LABELS } from "../Constants"; // Import constants

const Contactus = ({ scrollToFooter }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setShowModal(true);
        setFormData({ name: "", email: "", message: "", phone: "" });
        setTimeout(() => setShowModal(false), 4000);
      } else {
        alert("Failed to submit form");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative text-black pt-32 pb-12 px-4 md:px-6 min-h-screen bg-white scroll-mt-32" // Added pt-32 for more space
      style={{
        backgroundColor: "#ffffff", // White background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative container mx-auto max-w-5xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 uppercase drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ textShadow: "0px 0px 10px rgba(0, 123, 255, 0.8)" }}
        >
          Contact Us
        </motion.h2>
      </div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl pb-0 mb-0">
        <div className="space-y-6">
          {Object.keys(CONTACT_INFO).map((key) => (
            <InfoBox
              key={key}
              icon={
                key === "location" ? (
                  <FiMapPin size={30} className="text-blue-600" />
                ) : key === "phone" ? (
                  <FiPhone size={30} className="text-blue-600" />
                ) : (
                  <FiMail size={30} className="text-blue-600" />
                )
              }
              title={CONTACT_INFO[key].title}
              text={CONTACT_INFO[key].text}
              onClick={scrollToFooter}
            />
          ))}
        </div>

        <div className="bg-blue-500 bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg">
          <motion.h3 whileHover={{ scale: 1.05, color: "#ffffff" }} className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Get in Touch
          </motion.h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField type="text" name="name" placeholder={FORM_FIELDS.name} value={formData.name} handleChange={handleChange} />
              <InputField type="email" name="email" placeholder={FORM_FIELDS.email} value={formData.email} handleChange={handleChange} />
            </div>
            <InputField type="tel" name="phone" placeholder={FORM_FIELDS.phone} value={formData.phone} handleChange={handleChange} />
            <TextAreaField name="message" placeholder={FORM_FIELDS.message} value={formData.message} handleChange={handleChange} />
            <motion.button
              whileHover={{ scale: !loading ? 1.05 : 1 }}
              type="submit"
              disabled={loading}
              className={`w-full p-3 md:p-4 rounded text-white font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? BUTTON_LABELS.sending : BUTTON_LABELS.send}
            </motion.button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm w-full relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <FiX size={20} />
            </button>
            <h4 className="text-xl font-bold mb-2 text-blue-600">{MODAL_MESSAGES.success.title}</h4>
            <p>{MODAL_MESSAGES.success.message}</p>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

const InfoBox = ({ icon, title, text, onClick }) => (
  <motion.div
    onClick={onClick}
    className="cursor-pointer bg-white p-4 md:p-6 rounded-lg flex items-center gap-4 shadow-md transition-transform transform hover:scale-103 hover:shadow-lg"
    whileHover={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 123, 255, 0.4)" }}
  >
    <motion.div
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
      whileHover={{ boxShadow: "0px 0px 15px rgba(0, 123, 255, 1)" }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
    <div>
      <h4 className="text-lg md:text-xl font-semibold text-blue-600">{title}</h4>
      <p className="text-gray-700">{text}</p>
    </div>
  </motion.div>
);

const InputField = ({ type, name, placeholder, value, handleChange }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    name={name}
    placeholder={placeholder}
    required
    value={value}
    onChange={handleChange}
    className="w-full p-3 md:p-4 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 transition"
  />
);

const TextAreaField = ({ name, placeholder, value, handleChange }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    name={name}
    placeholder={placeholder}
    required
    rows="4"
    value={value}
    onChange={handleChange}
    className="w-full p-3 md:p-4 rounded bg-gray-200 border border-gray-300 focus:border-blue-500 transition"
  />
);

export default Contactus;
