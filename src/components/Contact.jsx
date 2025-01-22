import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: e.target.value.trim() ? "" : "Required" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_3agixxp",
        "template_mps59z3",
        formData,
        "7KKMPrBfmtnCqULMh"
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
    setIsLoading(false);
  };

  return (
    <motion.section>
      <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-orange-500 mb-10 futuristic-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
          <motion.form
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 ${
                  errors.name ? "border-red-500" : "focus:ring-2 focus:ring-teal-500"
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 ${
                  errors.email ? "border-red-500" : "focus:ring-2 focus:ring-teal-500"
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="bg-teal-500 px-6 py-3 rounded-full text-white font-medium hover:bg-teal-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {isSubmitted && <p className="mt-6 text-green-400 text-lg">Message sent successfully!</p>}
        </div>
      </section>
      <div className="absolute inset-0 space-background"></div>
      <style jsx>{`
        .futuristic-title {
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 30px #00ffcc, 0 0 60px #00ffcc, 0 0 120px #00ffcc;
        }
        .space-background {
          background: url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: move-stars 100s linear infinite;
        }
        @keyframes move-stars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;
