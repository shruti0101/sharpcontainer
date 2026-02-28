"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Useful Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Product", href: "/product" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    // {
    //   title: "Products",
    //   links: [
    //     { label: "Product 1", href: "/product/1" },
    //     { label: "Product 2", href: "/product/2" },
    //     { label: "Product 3", href: "/product/3" },
    //     { label: "All Products", href: "/products" },
    //   ],
    // },
    {
      title: "Support",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "FAQ", href: "/faq" },
        { label: "Terms and Conditions", href: "/term" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0971CE] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-teko font-semibold">
              Sangam Plastic Industries Pvt Lvt.
            </h3>
            <p className="text-gray-100 text-sm">
              Leading manufacturer of high-quality plastic containers and
              packaging solutions.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-200" />
                <a
                  href="tel:+919810026034"
                  className="hover:text-blue-200 transition"
                >
                  +91 98100 26034
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-200" />
                <a
                  href="tel:+919810316441"
                  className="hover:text-blue-200 transition"
                >
                  +91 98103 16441
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-200" />
                <a
                  href="mailto:info@polywell.co.in"
                  className="hover:text-blue-200 transition"
                >
                  info@polywell.co.in
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-200 mt-0.5" />
                <span>
                  110, Satya Bhawan, 36 Community Center, Wazirpur Industrial
                  Area, New Delhi-110052
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-teko font-semibold text-2xl">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-100 hover:text-blue-200 transition duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8"></div>

        {/* Bottom Section */}
        <div className="">
          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-blue-500/30 rounded-full hover:bg-blue-400 transition"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div> */}

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right text-sm text-gray-200"
          >
            <p>
              &copy; {currentYear} Sangam Plastic Industries Pvt. Ltd. All
              rights reserved.
            </p>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <a href="/privacy" className="hover:text-blue-200 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-blue-200 transition">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
