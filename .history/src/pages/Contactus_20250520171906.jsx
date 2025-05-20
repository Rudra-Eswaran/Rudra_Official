import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO, FORM_FIELDS, BUTTON_LABELS } from "../Constants"; 
import Success from "../components/Success"; 
import Failure from "../components/Failure"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = ({ scrollToFooter }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

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
      setMessageStatus(result.success ? "success" : "failure");
      setIsOverlayVisible(true);
      setTimeout(() => {
        setIsOverlayVisible(false);
        setMessageStatus("");
      }, 3000);
    } catch (err) {
      setMessageStatus("failure");
      setIsOverlayVisible(true);
      setTimeout(() => {
        setIsOverlayVisible(false);
        setMessageStatus("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative text-black pt-32 pb-12 px-4 md:px-6 min-h-screen bg-white"
    >
      <div id="contactus" className="relative container mx-auto max-w-5xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 uppercase drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ textShadow: "0px 0px 10px rgba(0, 123, 255, 0.8)" }}
          data-aos="fade-up"
        >
          Contact Us
        </motion.h2>
      </div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl pb-0 mb-0">
        {/* Left-side: Contact Info */}
        <div className="space-y-6" data-aos="fade-right">
          {Object.keys(CONTACT_INFO).map((key) => (
            <InfoBox
              key={key}
              title={CONTACT_INFO[key].title}
              text={key === "email" ? "eswar2003.it@gmail.com" : CONTACT_INFO[key].text}
              onClick={scrollToFooter}
              data-aos="fade-left"
            />
          ))}
        </div>

        {/* Right-side: Form */}
        <div className="bg-blue-500 bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg" data-aos="fade-left">
          <motion.h3
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            className="text-xl md:text-2xl font-semibold mb-4 text-white"
            data-aos="fade-up"
          >
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

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          {messageStatus === "success" && <Success />}
          {messageStatus === "failure" && <Failure />}
        </div>
      )}
    </motion.section>
  );
};

const InfoBox = ({ title, text, onClick }) => (
  <motion.div
    onClick={onClick}
    className="cursor-pointer bg-white p-4 md:p-6 rounded-lg flex flex-col shadow-md transition-transform transform hover:scale-103 hover:shadow-lg"
    whileHover={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 123, 255, 0.4)" }}
    data-aos="fade-up"
  >
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
