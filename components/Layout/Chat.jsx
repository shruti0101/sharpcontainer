'use client'
import { PhoneCall } from "lucide-react";
import React from "react";

const Whatsapp = () => {
  return (
    <>
      {/* WhatsApp Floating Button (Right side) */}
      <a
        href="https://wa.me/+919810057441"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp "
        className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
       <img src="/whatsapp.png" className="h-8 w-8" alt="loading" />
      </a>

      {/* Call Floating Button (Left side) */}
      <a
        href="tel:+919810057441"
        aria-label="Call us"
        className="fixed bottom-21 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce"
      >
        <PhoneCall size={30} />
      </a>
    </>
  );
};

export default Whatsapp;