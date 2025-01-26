
import React, { useState } from "react";
import { FaInstagram, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    } else if (formData.message.trim().split(/\s+/).length > 500) {
      newErrors.message = "Message cannot exceed 500 words.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-black bg:white h-full">
      <div className="container mx-auto px-6">
        <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold dark:text-white text-black mb-6">Let's talk about your project</h3>
            <p className="dark:text-white/70 text-black mb-8">
              I'm always interested in hearing about new projects and opportunities. Drop me a line, and I'll get back
              to you as soon as possible.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:flemberhanu@gmail.com" target="_blank" rel="noreferrer">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="dark:text-[#FFFFA9] text-black w-7 h-7" />
                  <span className="dark:text-white text-black">flemberhanu@gmail.com</span>
                </div>
              </a>

              <a href="tel:+251989241208" target="_blank" rel="noreferrer">
                <div className="flex items-center space-x-4">
                  <FaPhone className="dark:text-[#FFFFA9] text-black w-7 h-7" />
                  <span className="dark:text-white text-black">+251989241208</span>
                </div>
              </a>

              <a href="flemberhanu@gmail.com" target="_blank" rel="noreferrer">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="dark:text-[#FFFFA9] text-black w-7 h-7" />
                  <span className="dark:text-white text-black">ADDIS ABABA, ETHIOPIA</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/fiyaa_meta/profilecard/?igsh=MXd5ZHo4eXpheXd3bQ=="
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center space-x-4">
                  <FaInstagram className="w-8 h-8 dark:text-[#FFFFA9] text-black" />
                  <span className="dark:text-white text-black">flem berhanu</span>
                </div>
              </a>


               <a href="https://t.me/leliit" target="_blank" rel="noreferrer">
                <div className="flex items-center space-x-4">
                  <FaTelegram className="w-8 h-8 dark:text-[#FFFFA9] text-black" />
                  <span className="dark:text-white text-black">fiyameta</span>
                </div>
              </a>
            </div>
          </div>

         
          <form onSubmit={handleSubmit} className="space-y-6 md:w-3/4 w-full">
            {isSubmitted && (
              <p className="text-green-600 font-semibold">Thank you! Your message has been sent successfully.</p>
            )}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 dark:bg-white/5 bg:black border ${
                  errors.name ? "border-red-500" : "border-white/10"
                } rounded-lg focus:outline-none dark:focus:border-[#FFFFA9] focus:border-black dark:text-white text-black shadow-xl`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 dark:bg-white/5 bg:black border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } rounded-lg focus:outline-none dark:focus:border-[#FFFFA9] focus:border-black dark:text-white text-black shadow-xl`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 dark:bg-white/5 bg:black border ${
                  errors.message ? "border-red-500" : "border-white/10"
                } rounded-lg focus:outline-none dark:focus:border-[#FFFFA9] focus:border-black dark:text-white text-black resize-none shadow-xl`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFFFA9] text-black py-3 rounded-lg font-medium hover:bg-[#FFFFA9]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;