"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import axios from "axios";
import { homeProductData } from "@/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    productName: "",
    quantity: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/api/form/create", formData);

      if (res.status === 200 || res.status === 201) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organizationName: "",
          productName: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => setFormSubmitted(false), 4000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {/* success message  */}
      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✓ Quote request submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gradient-to-r from-[#0971CE] to-[#2e86f9] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/image/sharp-container/IMG_9304-Photoroom.webp"
            fill
            alt="background"
            className="object-cover"
          />
        </div>
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-teko mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 px-2 md:px-10 lg:px-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <Mail size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@polywell.co.in" className="text-gray-600">
              info@polywell.co.in
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <Phone size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+918810422935" className="text-gray-600 hover:text-blue-500 transition">
              +91 88104 22935
            </a>
            <br />
            <a href="tel:+919810057441" className="text-gray-600 hover:text-blue-500 transition">
              +91 98100 57441
            </a>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <MapPin size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Address
            </h3>
            <p className="text-gray-600">
              110, Satya Bhawan, 36 Community Center, Wazirpur Industrial Area,
              New Delhi-110052
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-2 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-teko">
            Send Us a Message
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 bg-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Organization / Hospital Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Organization / Hospital Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="Hospital or clinic name"
                  />
                </div>

                {/* Product Interest Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Product Interest
                  </label>
                  <select
                    required
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  >
                    <option value="">Select a product</option>
                    {homeProductData.map(({ id, title }) => (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    ))}
                    <option value="all">All Products</option>
                  </select>
                </div>

                {/* Quantity / Requirement */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Quantity / Requirement
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="e.g., 100 units per month"
                  />
                </div>
              </div>

              {/* Message / Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Message / Special Instructions
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-semibold hover:bg-[#145ec0] transition-colors shadow-md hover:shadow-lg"
              >
                Request a Quote
              </button>
            </form>

            {/* Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/image/sharp-container/IMG_9304-Photoroom.webp"
                  fill
                  alt="Contact us"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-gradient-to-br from-[#0971CE]/10 to-[#2e86f9]/10 p-6 rounded-xl border border-[#0971CE]/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Expert guidance on product selection
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Custom bulk pricing for large orders
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Technical support and specifications
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Fastest nationwide delivery
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 bg-gradient-to-r from-[#0971CE] to-[#2e86f9] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-teko">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of healthcare facilities that trust Sangam Plastic
            Industries for their biomedical waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911145678900"
              className="px-6 py-3 bg-white text-[#0971CE] rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@sangamplastic.com"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0971CE] transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
