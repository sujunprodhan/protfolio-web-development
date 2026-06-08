'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number with country code (e.g., +880...)
  const phoneNumber = '+8801900000000'; 
  const message = 'Hello Sujon! I came from your portfolio website and want to discuss a project.';

  const handleChat = () => {
    // Remove '+' or spaces from phone number for the URL
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={handleChat}
        aria-label="Chat on WhatsApp"
        className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        {/* Pulse Ping effect (subtle glow) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        
        {/* WhatsApp Icon */}
        <FaWhatsapp size={35} className="relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-[110%] top-1/2 -translate-y-1/2 bg-[#202327] border border-gray-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          Live Chat 🚀
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
